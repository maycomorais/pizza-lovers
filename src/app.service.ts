import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppStatus(): string {
    return 'App Running 🚀! Visit http://http://localhost:3099/docs for documentation';
  }
}
