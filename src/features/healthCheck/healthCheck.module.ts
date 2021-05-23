import { Module } from '@nestjs/common';
import { HealtCheckController } from './healtCheck.controller';
import { HealthCheckService } from './healthCheck.service';

@Module({
  imports: [],
  controllers: [HealtCheckController],
  providers: [HealthCheckService],
})
export class HealthCheckModule {}
