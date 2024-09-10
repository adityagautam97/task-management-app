import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   // Enable CORS
   app.enableCors({
    origin: 'http://localhost:3001', // React app URL
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });
  await app.listen(3000);
}
bootstrap();
