import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { execArgv } from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, () => {
    console.log(`Example app listening on port 3000`);
  });
}
bootstrap();
