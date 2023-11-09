import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const cors = require('cors');
  const corsOptions = {
    origin:'http://localhost:3000',
    credentials:true,
    optionSuccessStatus:200
  }
  const app = await NestFactory.create(AppModule);
  app.use(cors(corsOptions));
  await app.listen(3333);
}
bootstrap();