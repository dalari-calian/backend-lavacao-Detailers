import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module'
import { ClientModule } from './client/client.module'

@Module({
  imports: [
    UserModule,
    ClientModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
