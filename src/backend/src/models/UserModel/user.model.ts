import { type } from "os";
import { Column, DataType, HasMany, Table, Model, PrimaryKey } from "sequelize-typescript";
import {Blog} from '../../models/BlogModel/blog.model';
export enum UserRoles {
    Admin = "Admin",
    Customer = "Customer",
    Guide = "Guide",
    Staff = "Staff"
}

@Table({
    tableName: 'users',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
})


export class User extends Model<User> {
    
    @PrimaryKey
    @Column({
        primaryKey: true,
        autoIncrement: true,
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
    password_hash: string;

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

    @HasMany(() => Blog)
     blogs: Blog[];
}