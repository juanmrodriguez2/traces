import { Injectable } from '@nestjs/common';
import { IpService } from '../shared/services/ip.service';
import geodist from 'geodist';
import { FixerService } from '../shared/services/fixer.service';
import getSymbolFromCurrency from 'currency-symbol-map';
import { StatisticsService } from '../shared/services/statistics.service';
import { Trace } from '../shared/entities/trace';

@Injectable()
export class TracesService {
  constructor(
    private ipService: IpService,
    private fixerService: FixerService,
    private statisticsService: StatisticsService,
  ) {}

  /**
   * Obtains the complete ip trace, with the required data,
   * also updates the statistics using the statisticsService
   * @param ip
   */
  async requestTraces(ip: string): Promise<Trace> {
    const ipInfo = await this.ipService.getIpInfo(ip);
    const ratesData = await this.fixerService.getRates(ipInfo.currency);
    const currencies = Object.keys(ratesData?.rates ?? {}).map((key) => {
      return {
        iso: key,
        symbol: getSymbolFromCurrency(key),
        conversionRate: ratesData.rates[key],
      };
    });

    const result = {
      ip: ip,
      code: ipInfo.countryCode,
      name: ipInfo.country,
      lat: ipInfo.lat,
      lon: ipInfo.lon,
      distance: getDistanceToUSA(ipInfo.lat, ipInfo.lon),
      currencies,
    };

    await this.statisticsService.processNewTrace(result);

    return result;
  }

  /**
   * Returns the traces' statistics, using the statistics service.
   */
  async getStatistics() {
    const longestDistanceTrace =
      await this.statisticsService.getLongestDistanceTrace();
    const mostRequestedCountry =
      await this.statisticsService.getMostRequestedCountry();
    return {
      mostRequestedCountry,
      longestDistanceTrace,
    };
  }
}

/**
 * This method determines the distance between one point and New York.
 * @param lat
 * @param lon
 */
const getDistanceToUSA = (lat: number, lon: number): number => {
  const nyCoords = { lat: 40.7128, lon: -74.006 };
  const ipCoords = { lat: lat, lon: lon };
  return geodist(ipCoords, nyCoords, {
    exact: true,
    unit: 'km',
    method: 'haversine',
  });
};
