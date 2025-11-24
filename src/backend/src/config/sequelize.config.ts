import { ConfigService } from "@nestjs/config";
import { SequelizeModuleOptions } from "@nestjs/sequelize";
import { Dialect } from "sequelize";
import { Blog } from "src/models/BlogModel/blog.model";
import { Categories } from "src/models/BlogModel/categories.model";
import { PostCategories } from "src/models/BlogModel/blog_categories.model";
import { PostTags } from "src/models/BlogModel/blog_tags.model";
import { Tags } from "src/models/BlogModel/tags.model";
import { User } from "src/models/UserModel/user.model";
import {Tour} from "src/models/TourModel/tour.model"
import {TourType} from "src/models/TourModel/tour_types.modal"
import { TourDestination } from "src/models/TourModel/tour_destination.modal";
import { Destination } from "src/models/TourModel/destination.modal";
import { TourImage } from "src/models/TourModel/tour_image.model";
import { Booking } from "src/models/BookingModel/booking.model";
import { TourDeparture } from "src/models/TourModel/tour_departure.model";

export const sequelizeConfig = (configServices: ConfigService): SequelizeModuleOptions => ({
  
        database: configServices.get<string>('DB_NAME'),
        username: configServices.get<string>('DB_USERNAME'),
        password: configServices.get<string>('DB_PASSWORD'),
        port: Number(configServices.get<number>('DB_PORT'))
          ? Number(configServices.get<number>('DB_PORT'))
          : 5432,
        host: configServices.get<string>('DB_HOST'),
        dialect: configServices.get<Dialect>('DB_DIALECT') ?? "postgres",
        models: [
          User, 
          Blog, 
          Tags, 
          Categories, 
          PostTags, 
          PostCategories, 
          Tour, 
          TourType, 
          TourDestination, 
          Destination, 
          TourImage, 
          Booking, 
          TourDeparture],
          
        autoLoadModels: true,
        synchronize: true,
       
        
});
