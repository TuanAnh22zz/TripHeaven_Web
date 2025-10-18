import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger('bootstrap');

  const configService = new ConfigService();
  const port = configService.get<number>('PORT') || 3000;
  const pass = configService.get<string>('DB_PASSWORD');
  app.setGlobalPrefix('api')
  
  logger.log(`Server running on port ${port}`);
  logger.log(`Environment: ${pass}`);

      

  await app.listen(configService.get<number>('PORT') ?? 3000);

  
}
bootstrap();
