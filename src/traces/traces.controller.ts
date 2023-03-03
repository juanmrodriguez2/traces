import { Controller, Get } from '@nestjs/common';
import { TracesService } from './traces.service';
import { StatisticsResponse } from './responses/statistics.response';
import { TracesResponse } from './responses/traces.response';

@Controller()
export class TracesController {
  constructor(private readonly tracesService: TracesService) {}

  @Get('traces')
  getTraces(): TracesResponse {
    const result = this.tracesService.getTraces();
    return null;
  }

  @Get('statistics')
  getStatistics(): StatisticsResponse {
    const result = this.tracesService.getStatistics();
    return null;
  }
}
