import { Module } from '@nestjs/common';
import { FixerService } from './services/fixer.service';
import { IpService } from './services/ip.service';
import { StatisticsService } from './services/statistics.service';
// @ts-ignore
import knexConfig from '../../knexfile';
import { knex } from 'knex';

@Module({
  // imports: [KnexModule.forRoot({ config: knexConfig })],
  providers: [
    {
      provide: 'KnexConnection',
      useFactory: () => {
        return knex(knexConfig);
      },
    },
    FixerService,
    IpService,
    StatisticsService,
  ],
  exports: ['KnexConnection', FixerService, IpService, StatisticsService],
})
export class SharedModule {}
