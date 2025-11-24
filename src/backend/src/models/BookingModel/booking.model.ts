import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo, HasOne} from 'sequelize-typescript';
import { TourDeparture } from '../TourModel/tour_departure.model';
import { User } from '../UserModel/user.model';
  
  export enum BookingStatus {
    Pending = 'pending',
    Confirmed = 'confirmed',
    Cancelled = 'cancelled',
    Completed = 'completed',
  }
  
  @Table({ 
    tableName: 'bookings',
    timestamps: true,
    createdAt: 'booking_date' 
    })
  export class Booking extends Model<Booking> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    booking_id: number;
  
    @ForeignKey(() => User)
    @Column({ 
        type: DataType.INTEGER, 
        allowNull: false,
        onDelete: 'CASCADE' 
    })
    userId: number;
  
  
    @Column({ 
        type: DataType.INTEGER, 
        allowNull: false 
    })
    numAdults: number;
  
    @Column({ 
        type: DataType.INTEGER, 
        defaultValue: 0 
    })
    numChildren: number;
  
    @Column({ 
        type: DataType.DECIMAL(12, 2), 
        allowNull: false 
    })
    totalPrice: number;
  
    @Column(DataType.TEXT)
    notes: string;
  
    @Column({
      type: DataType.ENUM(...Object.values(BookingStatus)),
      allowNull: false,
      defaultValue: BookingStatus.Pending,
    })
    status: BookingStatus;
    
  

    @ForeignKey(() => TourDeparture)
    @Column({ type: DataType.INTEGER, allowNull: false, onDelete: 'RESTRICT' })
    tourDepartureId: number;
  
    @BelongsTo(() => TourDeparture)
    tourDeparture: TourDeparture;

    @BelongsTo(() => User)
    user: User;
  
  }