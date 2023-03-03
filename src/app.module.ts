import { Module } from '@nestjs/common';
import { TracesModule } from './traces/traces.module';
import { MongooseModule } from '@nestjs/mongoose';
import { databaseConfig } from '../database.config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: databaseConfig,
    }),
    TracesModule,
  ],
})
export class AppModule {}
