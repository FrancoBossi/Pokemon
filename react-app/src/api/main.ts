import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');       // opcional: /api/…
  app.enableCors(); // <-- Agrega esta línea
  await app.listen(3000);
}
bootstrap();