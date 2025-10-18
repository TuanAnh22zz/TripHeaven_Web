import { type } from "os";
import { use } from "react";
import { BelongsTo, Column, DataType, ForeignKey, Table, Model, PrimaryKey } from "sequelize-typescript";
import { User} from "../UserModel/user.model";





export enum BlogStatus {
    Draft = "Draft",    
    Published = "Published",
    Pending = "Pending",

}
@Table({
    tableName: 'blog',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    
})

export class Blog extends Model<Blog> {

    @PrimaryKey
    @Column({
        primaryKey: true,
        autoIncrement: true,
        type: DataType.INTEGER
    })
    post_id: number;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    title: string;

    @Column({
        allowNull: false,
        unique: true,
        type: DataType.STRING
    })
    slug: string;

    @Column({        
        allowNull: true,   
        type: DataType.TEXT
    })
    excerpt: string;

    @Column({
        allowNull: false,
        type: DataType.TEXT
    })
    content: string;
    
    @Column({
        allowNull: true,
        type: DataType.STRING
    })
    thumbnail_url: string;


    @Column({
        allowNull: false,   
        defaultValue: BlogStatus.Draft,
        type: DataType.ENUM(...Object.values(BlogStatus)),
    })
    status: BlogStatus;

    @Column({
        allowNull: false,
        type: DataType.INTEGER,
        defaultValue: 0
    })
    view_count: number;

    @Column({
        allowNull: true,
        type: DataType.DATE,
    })
    published_at: Date;

    @ForeignKey(() => User)
    @Column({
        allowNull: false,
        type: DataType.INTEGER,
    })
    author_id: number;

    @BelongsTo(() => User)
    author: User;

    
}