import {Table,  Column, Model, DataType, PrimaryKey, AutoIncrement, HasMany} from "sequelize-typescript";
import { Tour } from "./tour.model";

  
  @Table({
    tableName: "tour_types",
    timestamps: false
  })
  export class TourType extends Model<TourType> {
    @PrimaryKey
    @AutoIncrement
    @Column({
      type: DataType.INTEGER,
    })
    tour_type_id: number;
  
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

    @HasMany(() => Tour)
    tours: Tour[];
  }
  