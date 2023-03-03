import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

export const databaseConfig = async (
  configService: ConfigService,
): Promise<MongooseModuleOptions> => ({
  uri:
    process.env.MONGODB_URI ||
    'mongodb://admin:Password01.@localhost:27017/?authSource=admin',
});
