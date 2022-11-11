import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getConfig(): any {
    console.log(process.env.PORT)
  }
}
