import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { Sequelize } from 'sequelize';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './common/filters/all_exception.filter';
import { TransformInterceptor } from './common/interceptors/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger('bootstrap');

  const configService = new ConfigService();
  

  app.enableCors({
    origin: ['http://localhost:5173',
            'http://localhost:5174'],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credential: true
  })

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, 
      forbidNonWhitelisted: true, 
      transform: true,
    }))

  app.useGlobalInterceptors(new TransformInterceptor())
  app.useGlobalFilters(new AllExceptionFilter())

  const port = configService.get<number>('PORT') || 3000;
 
  logger.log(`Application is running on: http://localhost:${port}`);  
  await app.listen(configService.get<number>('PORT') ?? 3000);

 

 
  
}
bootstrap();
