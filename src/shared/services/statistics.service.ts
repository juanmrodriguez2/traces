import { Inject, Injectable } from '@nestjs/common';
import { Trace } from '../entities/trace';
import { LongestDistance } from '../entities/longest-distance';
import { CountryStat } from '../entities/country-stat';
import { Knex } from 'knex';

@Injectable()
export class StatisticsService {
  constructor(@Inject('KnexConnection') private knex: Knex) {}

  /**
   * This method populates the statistics data,
   * using transactions to avoid data inconsistencies and handle the concurrency.
   * @param trace the requested trace
   */
  async processNewTrace(trace: Trace): Promise<void> {
    await this.knex.transaction(async (trx) => {
      let existingRecord = await trx('CountryStats')
        .select()
        .where('code', trace.code)
        .forUpdate()
        .first();

      if (existingRecord) {
        await trx('CountryStats')
          .where('code', trace.code)
          .increment('occurrences', 1);
      } else {
        await trx('CountryStats').insert({
          name: trace.name,
          code: trace.code,
          occurrences: 1,
        } as CountryStat);
      }

      existingRecord = await trx('LongestDistance')
        .select()
        .forUpdate()
        .first();

      if (existingRecord) {
        await trx('LongestDistance')
          .where('distance', '<', trace.distance)
          .update({
            name: trace.name,
            code: trace.code,
            distance: trace.distance,
          });
      } else {
        await trx('LongestDistance').insert({
          name: trace.name,
          code: trace.code,
          distance: trace.distance,
        } as CountryStat);
      }
    });
  }

  /**
   * Obtains the longest distance, in this case the table contains only one record.
   */
  async getLongestDistanceTrace(): Promise<LongestDistance> {
    return this.knex('LongestDistance').first();
  }

  /**
   * Obtains the most requested country, in this case the number of rows is small,
   * does not require a complex strategy to determine the value.
   */
  async getMostRequestedCountry(): Promise<CountryStat> {
    return (await this.knex
      .select('*')
      .from('CountryStats')
      .orderBy('occurrences', 'desc')
      .first()) as CountryStat;
  }
}
