import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, SwaggerCustomOptions, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from '@/_app/app.module';
import { ValidationPipe } from '@nestjs/common';
import * as basicAuth from 'express-basic-auth';

declare module 'express-basic-auth';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api/v1');

  const swaggerUser = configService.get('SWAGGER_USER', 'admin');
  const swaggerPassword = configService.get('SWAGGER_PASSWORD', 'admin');

  app.use(
    ['/api-docs', '/api-docs-json'],
    basicAuth({
      challenge: true,
      users: {
        [swaggerUser]: swaggerPassword,
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('CuraKidney API')
    .setDescription('The CuraKidney API documentation')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        in: 'header',
      },
      'bearer',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document, {
    customSiteTitle: 'CuraKidney API',
    persistAuthorization: true,
  } as SwaggerCustomOptions);

  const port = configService.get('PORT');
  await app.listen(port);
}
bootstrap();
