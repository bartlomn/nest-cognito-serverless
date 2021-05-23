import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthConfig {
  constructor(private configService: ConfigService) {}
  get userPoolId(): string {
    return this.configService.get<string>('COGNITO_USER_POOL_ID');
  }
  get clientId(): string {
    return this.configService.get<string>('COGNITO_CLIENT_ID');
  }
  get region(): string {
    return this.configService.get<string>('COGNITO_REGION');
  }
  get authority(): string {
    return `https://cognito-idp.${this.region}.amazonaws.com/${this.userPoolId}`;
  }
}
