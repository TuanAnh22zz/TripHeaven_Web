import { ConfigService } from "@nestjs/config";
import { SequelizeModuleOptions } from "@nestjs/sequelize";
import { Dialect } from "sequelize";
import { Blog } from "src/models/BlogModel/blog.model";
import { Categories } from "src/models/BlogModel/categories.modal";
import { PostCategories } from "src/models/BlogModel/post_categories.modal";
import { PostTags } from "src/models/BlogModel/post_tags.model";
import { Tags } from "src/models/BlogModel/tags.modal";
import { User } from "src/models/UserModel/user.model";
import {Tour} from "src/models/TourModel/tour.model"
import {TourType} from "src/models/TourModel/tour_types.modal"
import { TourDestination } from "src/models/TourModel/tour_destination.modal";
import { Destination } from "src/models/TourModel/destination.modal";

export const sequelizeConfig = (configServices: ConfigService): SequelizeModuleOptions => ({
  
        database: configServices.get<string>('DB_NAME'),
        username: configServices.get<string>('DB_USERNAME'),
        password: configServices.get<string>('DB_PASSWORD'),
        port: Number(configServices.get<number>('DB_PORT'))
          ? Number(configServices.get<number>('DB_PORT'))
          : 5432,
        host: configServices.get<string>('DB_HOST'),
        dialect: configServices.get<Dialect>('DB_DIALECT') ?? "postgres",
        models: [User, Blog, Tags, Categories, PostTags, PostCategories, Tour, TourType, TourDestination, Destination],
        synchronize: true,
        autoLoadModels: true,
        
});
