import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthCheckService {
  getOK(): string {
    return 'OK';
  }
}
