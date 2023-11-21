import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module'
import { ClientModule } from './client/client.module'
import { CarModule } from './car/car.module';

@Module({
  imports: [
    UserModule,
    ClientModule,
    CarModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
