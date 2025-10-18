import { type } from "os";
import { Column, DataType, Table, Model, ForeignKey, PrimaryKey } from "sequelize-typescript";

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
       allowNull: true,
       unique: true,
       type: DataType.STRING
    })
    name: string;

    @Column({
        allowNull: true,
        unique: true,
        type: DataType.STRING
     })
     slug: string;
}