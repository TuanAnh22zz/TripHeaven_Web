    import { type } from "os";
    import { BelongsTo, Column, DataType, ForeignKey, Table, Model } from "sequelize-typescript";
    import {Blog} from './blog.model';
    import { Categories } from "./categories.model";


    @Table({
        tableName: 'post_categories',
        timestamps: false,
    })

    export class PostCategories extends Model<PostCategories> {
        
        @Column({
            allowNull:false,
            type: DataType.STRING
        })
        name: string;

        @Column({
            allowNull:false,
            type: DataType.STRING
        })
        slug: string;


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