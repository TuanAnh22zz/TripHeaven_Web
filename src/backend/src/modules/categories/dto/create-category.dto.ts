import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Unique } from 'sequelize-typescript';

export class CreateCategoryDto {
    @IsString({message: "Name phải là chuỗi"}) 
    @IsNotEmpty({message: "Name không được bỏ trống"})
    name: string

    @IsOptional({message: "SortOrder không được trùng"})
    sortOrder: number

}
