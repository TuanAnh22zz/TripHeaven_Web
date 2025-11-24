import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Categories } from 'src/models/BlogModel/categories.model';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports:[SequelizeModule.forFeature([Categories])]
})
export class CategoriesModule {}