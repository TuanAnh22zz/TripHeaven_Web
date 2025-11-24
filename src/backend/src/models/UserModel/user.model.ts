import { type } from "os";
import { Column, DataType, HasMany, Table, Model, PrimaryKey, AutoIncrement, BeforeValidate } from "sequelize-typescript";
import {Blog} from '../../models/BlogModel/blog.model';
import { Booking } from "../BookingModel/booking.model";
import * as bcrypt from 'bcryptjs'

export enum UserRoles {
    Admin = "Admin",
    Customer = "Customer",
  
}

@Table({
    tableName: 'users',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
})


export class User extends Model<User> {
    @AutoIncrement
    @PrimaryKey
    @Column({
        primaryKey: true,
        type: DataType.INTEGER
    })
    user_id: number;

    @Column({
        allowNull: false,
        unique: true,
        type: DataType.STRING
    })
    username: string;

    @Column({
        allowNull: false,
        unique: true,
        type: DataType.STRING
    })
    email: string;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    password: string;

    @Column({
        allowNull: true,
        type: DataType.STRING
    })
    first_name: string;

    @Column({
        allowNull: true,
        type: DataType.STRING
    })
    last_name: string;

    @Column({
        allowNull: true,
        unique: true,
        type: DataType.STRING
    })
    phone: string;

    @Column({
        allowNull: true,
        type: DataType.DATE
    })
    date_of_birth: Date;

    @Column({
        allowNull: true,
        type: DataType.STRING
    })
    gender: string;


    @Column({
        allowNull: true,
        type: DataType.TEXT
    })
    address: string;

    @Column({
        allowNull: true,
        defaultValue: UserRoles.Customer,
        type: DataType.ENUM(...Object.values(UserRoles))
    })
    role: UserRoles;

    @HasMany(() => Booking, { as: 'bookings' }) 
    bookings: Booking[];


     comparePassword(password: string) {
        const {password: passwordHashed} = this.get({plain: true} )
        return bcrypt.compareSync(password, passwordHashed)
    }

    getUserWithoutPassword() {
        const {password: pwd, ...rest} = this.get({plain: true});
        return rest;
    }

    @BeforeValidate
    static hashPassword(user: User){
        if(user.isNewRecord){
            const password = user.get('password')
            const hashedPassword = bcrypt.hashSync(password, 10)

            user.setDataValue('password', hashedPassword)
            
        }
    }
}