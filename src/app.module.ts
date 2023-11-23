import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module'
import { ClientModule } from './client/client.module'
import { CarModule } from './car/car.module';
import { ServiceModule } from './service/service.module';

@Module({
  imports: [
    UserModule,
    ClientModule,
    CarModule,
    ServiceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
