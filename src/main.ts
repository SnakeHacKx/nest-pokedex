import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v2');

  app.useGlobalPipes(
    // Validaciones para los parametros que se mandan en el body de las request
    new ValidationPipe({
      whitelist: true, // Evita que vengan mas parametros en el body de los que requiero
      forbidNonWhitelisted: true, // Muestra un error cuando se manda un parametro que no deberia mandar
    }),
  );

  await app.listen(3000);
}
bootstrap();
