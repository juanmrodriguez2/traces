import { Injectable } from '@nestjs/common';

@Injectable()
export class TracesService {
  getTraces(): string {
    return 'Traces!';
  }

  getStatistics() {
    return '';
  }
}
