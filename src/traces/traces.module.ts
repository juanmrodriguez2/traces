import { Module } from '@nestjs/common';
import { TracesController } from './traces.controller';
import { TracesService } from './traces.service';
import { SharedModule } from '../shared/shared.module';

@Module({
  controllers: [TracesController],
  providers: [TracesService],
  imports: [SharedModule],
})
export class TracesModule {}
