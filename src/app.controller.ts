import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // --- AÑADE ESTE MÉTODO ---
  @Get('test')
  getTest(): object {
    return { message: '¡La app de NestJS está funcionando en Firebase!' };
  }
  // -------------------------
}
