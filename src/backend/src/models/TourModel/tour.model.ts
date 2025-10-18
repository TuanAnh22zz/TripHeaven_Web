import {Table,  Column, Model, DataType, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo, BelongsToMany } from "sequelize-typescript";
import { Destination } from "./destination.modal";
import { TourDestination } from "./tour_destination.modal";
import { TourType } from "./tour_types.modal";

export enum TourStatus {
    Active = "active",
    Inactive = "inactive",
  }
  
  @Table({
    tableName: "tours",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  })
  export class Tour extends Model<Tour> {
    @PrimaryKey
    @AutoIncrement
    @Column({
      type: DataType.INTEGER,
    })
    tour_id: number;
  
    @Column({
      allowNull: false,
      type: DataType.STRING(255),
    })
    name: string;
  
    @Column({
      allowNull: false,
      unique: true,
      type: DataType.STRING(255),
    })
    slug: string;

    @Column({
        allowNull: true,
        type: DataType.STRING(255),
      })
      accommodation: string;

      @Column({
        allowNull: true,
        type: DataType.STRING(100),
      })
      best_season: string;
    
  
    @Column({
      allowNull: true,
      type: DataType.STRING(255),
    })
    journey: string;
  
  
    @Column({
      allowNull: true,
      type: DataType.TEXT,
    })
    description: string;
  
    @Column({
      allowNull: true,
      type: DataType.TEXT,
    })
    itinerary: string;
  
    @Column({
      allowNull: false,
      type: DataType.DECIMAL(12, 2),
    })
    price_adult: number;
  
    @Column({
      allowNull: true,
      type: DataType.DECIMAL(12, 2),
    })
    price_child: number;
  
    @Column({
      allowNull: true,
      type: DataType.STRING(255),
    })
    main_image_url: string;
  
    
  
    @Column({
      allowNull: false,
      type: DataType.ENUM(...Object.values(TourStatus)),
      defaultValue: TourStatus.Active,
    })
    status: TourStatus;
  
    @Column({
      allowNull: false,
      type: DataType.DATE,
      defaultValue: DataType.NOW,
    })
    created_at: Date;
  
    @Column({
      allowNull: true,
      type: DataType.DATE,
    })
    updated_at: Date;

    //Liên kết với bảng TourType
    @ForeignKey(() => TourType)
    @Column({
        allowNull: true,
        type: DataType.INTEGER,
    })
    tour_type_id: number;

    @BelongsTo(() => TourType)
    tourType: TourType;


    @BelongsToMany(() => Destination, () => TourDestination)
    destinations: Destination[];



    
  }