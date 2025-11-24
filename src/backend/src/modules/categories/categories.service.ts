import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Categories } from 'src/models/BlogModel/categories.model';
import { Helper } from 'src/utils/helpers';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {

  constructor(
    @InjectModel(Categories) private readonly categoriesModel: typeof Categories
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
      const alreadyExists = await this.categoriesModel.findOne({
        where: {
          slug: Helper.makeSlugFromString(createCategoryDto.name)
        }
      })
      if(alreadyExists){
        throw new BadRequestException("Danh mục đã tồn tại")
      }

      const newCategories = await this.categoriesModel.create(createCategoryDto as any)
      return newCategories;

  }

  async findAll() {
      return await this.categoriesModel.findAll({
        order: [['sortOrder','ASC']]
      });
  }

  async findOne(id: number) {
    return await this.categoriesModel.findByPk(id)
  }

 async update(categories_id: number, updateCategoryDto: UpdateCategoryDto) {
    const alreadyExists = await this.categoriesModel.findByPk(categories_id)
    if(!alreadyExists){
      throw new BadRequestException("Không tìm thấy danh mục.")
    }

    const update = await this.categoriesModel.update(updateCategoryDto,{
      where: {
        categories_id
      }
    })

    const message = update[0] > 0 
      ? "Danh mục đã được cập nhật" 
      : "Danh mục chưa được cập nhật"
    return message
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
