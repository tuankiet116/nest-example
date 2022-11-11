import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getConfig();
  }
}

@Controller('me')
export class Mine {
  constructor(private readonly appService: AppService) {}
}
