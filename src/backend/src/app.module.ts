import { Module } from '@nestjs/common';
import {SequelizeModule, SequelizeModuleOptions} from '@nestjs/sequelize'
import {ConfigModule, ConfigService} from '@nestjs/config'
import { Dialect } from 'sequelize';
import {sequelizeConfig} from './config/sequelize.config'
import { BlogModule } from './modules/blog/blog.module';


@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true,   envFilePath: 'src/.env', }),
    SequelizeModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configServices: ConfigService): SequelizeModuleOptions => {
        return sequelizeConfig(configServices);
      }
  }),
    BlogModule,
   
  ]
})
export class AppModule {}
