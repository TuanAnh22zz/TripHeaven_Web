import { type } from "os";
import { Column, DataType, Table, Model, PrimaryKey } from "sequelize-typescript";


@Table({
   tableName: 'tags',
   timestamps: false,

})
export class Tags extends Model<Tags> {

    @PrimaryKey
    @Column({
      primaryKey: true,
      autoIncrement: true,
      type: DataType.INTEGER
    })
    tag_id: number; 

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