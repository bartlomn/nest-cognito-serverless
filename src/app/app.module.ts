import { Module } from '@nestjs/common';
import { HealthCheckModule } from '../features/healthCheck';

@Module({
  imports: [HealthCheckModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
