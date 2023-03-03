import { Body, Controller, Get, Post } from '@nestjs/common';
import { TracesService } from './traces.service';
import { StatisticsResponse } from './responses/statistics.response';
import { TracesResponse } from './responses/traces.response';
import { TracesRequest, tracesRequestSchema } from './requests/traces.request';
import { ApiResponse } from '@nestjs/swagger';

@Controller()
export class TracesController {
  constructor(private readonly tracesService: TracesService) {}

  @Post('traces')
  @ApiResponse({
    description: 'Returns the ip information',
    type: TracesRequest,
    isArray: false,
  })
  async postTraces(@Body() data: TracesRequest): Promise<TracesResponse> {
    await tracesRequestSchema.validate(data);
    const result = await this.tracesService.requestTraces(data.ip);
    return {
      code: result.code,
      currencies: result.currencies.map((c) => {
        return {
          iso: c.iso,
          symbol: c.symbol,
          conversion_rate: c.conversionRate,
        };
      }),
      distance_to_usa: result.distance,
      ip: result.ip,
      lat: result.lat,
      lon: result.lon,
      name: result.name,
    };
  }

  @Get('statistics')
  async getStatistics(): Promise<StatisticsResponse> {
    const result = await this.tracesService.getStatistics();
    return {
      longest_distance: {
        country: result.longestDistanceTrace.name,
        value: result.longestDistanceTrace.distance,
      },
      most_traced: {
        country: result.mostRequestedCountry.name,
        value: result.mostRequestedCountry.occurrences,
      },
    };
  }
}
