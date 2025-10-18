import { type } from "os";
import { BelongsTo, Column, DataType, ForeignKey, Table, Model } from "sequelize-typescript";
import {Blog} from '../../models/BlogModel/blog.model';
import { Categories } from "./categories.modal";


@Table({
    tableName: 'post_categories',
    timestamps: false,
})

export class PostCategories extends Model<PostCategories> {
    
    @ForeignKey(() => Blog)
    @Column({
        allowNull: true,
        type: DataType.INTEGER,
    })
    post_id: number;  

    @BelongsTo (() => Blog)
    post: Blog;


    
    @ForeignKey(() => Categories)
    @Column({
        allowNull: true,
        type: DataType.INTEGER,
    })
    category_id: number;  

    @BelongsTo (() => Categories)
    category: Categories;


}   