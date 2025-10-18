import {Table,  Column, Model, DataType, PrimaryKey, AutoIncrement} from "sequelize-typescript";
  
  @Table({
    tableName: "destinations",
    timestamps: false, 
  })
  export class Destination extends Model<Destination> {
    @PrimaryKey
    @AutoIncrement
    @Column({
      type: DataType.INTEGER,
    })
    destination_id: number;
  
    @Column({
      allowNull: false,
      unique: true,
      type: DataType.STRING(100),
    })
    name: string;
  
    @Column({
      allowNull: false,
      unique: true,
      type: DataType.STRING(100),
    })
    slug: string;

    @Column({
        allowNull: true,
        type: DataType.STRING
    })
    thumbnail_url: string;
  }
  