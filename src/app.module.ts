import { Module } from '@nestjs/common';
import { TracesModule } from './traces/traces.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [TracesModule, SharedModule],
})
export class AppModule {}
