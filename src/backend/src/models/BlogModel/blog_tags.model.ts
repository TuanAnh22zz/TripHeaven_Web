import { type } from "os";
import { BelongsTo, Column, DataType, ForeignKey, Table, Model } from "sequelize-typescript";
import {Blog} from './blog.model';
import { Categories } from "./categories.model";
import { Tags } from "./tags.model";


@Table({
    tableName: 'post_tags',
    timestamps: false,
})

export class PostTags extends Model<PostTags> {
    @ForeignKey(() => Blog)
    @Column({
        allowNull: true,
        type: DataType.INTEGER,
    })
    post_id: number;  

    @BelongsTo (() => Blog)
    post: Blog;


    
    @ForeignKey(() => Tags)
    @Column({
        allowNull: true,
        type: DataType.INTEGER,
    })
    tag_id: number;  

    @BelongsTo (() => Tags)
    tags: Tags;


}