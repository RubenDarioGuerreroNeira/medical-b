import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { TelegramModule } from './telegram/telegram.module';

@Module({
  imports: [ConfigModule, TelegramModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
