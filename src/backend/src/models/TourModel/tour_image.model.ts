import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    ForeignKey,
    BelongsTo,
  } from 'sequelize-typescript';
import { Tour } from './tour.model';
  
  @Table({
    tableName: 'tour_images',
    timestamps: false, // Bảng này không có created_at và updated_at
  })
  export class TourImage extends Model<TourImage> {
    @PrimaryKey
    @Column({
      primaryKey: true,
      autoIncrement: true,
      type: DataType.INTEGER,
    })
    image_id: number;
  
   
    @ForeignKey(() => Tour) 
    @Column({
      allowNull: false, 
      type: DataType.INTEGER,
    })
    tour_id: number;
  
   
   
  
    @Column({
      allowNull: false,
      type: DataType.STRING,
    })
    image_url: string;
  
    @Column({
      allowNull: true,
      type: DataType.TEXT,
    })
    caption: string;
  
    @Column({
      allowNull: true,
      type: DataType.STRING,
    })
    alt_text: string;
  
    @Column({
      allowNull: false, 
      type: DataType.INTEGER,
      defaultValue: 0,
    })
    display_order: number;

    @BelongsTo(() => Tour, 'tour_id')
    tour: Tour;
  }