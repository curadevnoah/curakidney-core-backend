import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  healthcheck() {
    return {
      is_online: true,
    };
  }
}
