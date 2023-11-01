import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/user.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
