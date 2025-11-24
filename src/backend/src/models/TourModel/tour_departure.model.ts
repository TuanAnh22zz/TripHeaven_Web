import {Table,Column,Model,DataType,PrimaryKey,AutoIncrement,ForeignKey,BelongsTo,HasMany,} from 'sequelize-typescript';
import { Booking } from '../BookingModel/booking.model';
  

import { Tour } from './tour.model';
  
 
  export enum DepartureStatus {
    Opening = 'opening',
    Full = 'full',
    Completed = 'completed',
    Cancelled = 'cancelled',
  }
  
  @Table({
    tableName: 'tour_departures',
    timestamps: true, 
    
  })
  export class TourDeparture extends Model<TourDeparture> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    tour_departure_id: number;
  
    @ForeignKey(() => Tour) 
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
    })
    tourId: number;
  
   
  
    @Column({
      type: DataType.DATE,
      allowNull: false,
    })
    departureDate: Date;
  
    @Column({
      type: DataType.DATE,
      allowNull: false,
    })
    returnDate: Date;
  
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    maxSlots: number;
  
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    availableSlots: number;
  
    @Column({
      type: DataType.ENUM(...Object.values(DepartureStatus)),
      allowNull: false,
      defaultValue: DepartureStatus.Opening,
    })
    status: DepartureStatus;
  
    @BelongsTo(() => Tour)
    tour: Tour;

    @HasMany(() => Booking)
    bookings: Booking[];
  }