import { Controller, Get } from '@nestjs/common';
import { HealthCheckService } from './healthCheck.service';

@Controller('healthcheck')
export class HealtCheckController {
  constructor(private readonly healthService: HealthCheckService) {}

  @Get()
  getHello(): string {
    return this.healthService.getOK();
  }
}
