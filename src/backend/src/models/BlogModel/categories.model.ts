import { Headers } from "@nestjs/common";
import { type } from "os";
import { Column, DataType, Table, Model, ForeignKey, PrimaryKey, BeforeCreate, BeforeValidate, BeforeUpdate } from "sequelize-typescript";
import { Helper } from "src/utils/helpers";

@Table({
   tableName: 'categories',
   timestamps: false,
})
export class Categories extends Model<Categories> {
   @PrimaryKey
   @Column({
      primaryKey: true,
      autoIncrement: true,
      type: DataType.INTEGER,
   })
   categories_id: number;

    @Column({
       allowNull: false,
       unique: true,
       type: DataType.STRING
    })
    name: string;

    @Column({
        allowNull: false,
        unique: true,
        type: DataType.STRING
     })
     slug: string;

     @Column({
      allowNull: false,
      unique: true,
      type: DataType.INTEGER
   })
   sortOrder: number;

    @BeforeValidate 
    static makeSlug(newCategories: Categories){
      const name = newCategories.dataValues.name
      if(name){
         const slug = Helper.makeSlugFromString(name);
         console.log({name})
         newCategories.setDataValue('slug', slug)
      }
     }

     

 
}