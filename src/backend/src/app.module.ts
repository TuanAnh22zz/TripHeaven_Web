import { Module } from '@nestjs/common';
import {SequelizeModule, SequelizeModuleOptions} from '@nestjs/sequelize'
import {ConfigModule, ConfigService} from '@nestjs/config'
import {sequelizeConfig} from './config/sequelize.config'
import { BlogModule } from './modules/blog/blog.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import {JwtModule, JwtModuleOptions} from '@nestjs/jwt'
import { config } from 'process';


@Module({
  imports: [

    ConfigModule.forRoot({isGlobal: true,   envFilePath: 'src/.env', }),
    SequelizeModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configServices: ConfigService): SequelizeModuleOptions => {
        return sequelizeConfig(configServices);
      }
    }),
    JwtModule.registerAsync({global: true,
      inject: [ConfigService], 
      useFactory: (configService: ConfigService): JwtModuleOptions => {
        return {
          secret: configService.getOrThrow<string>('JWT_SECRET'),
          signOptions: {
            expiresIn: configService.getOrThrow<string>('JWT_EXPIRES_IN') as unknown as number,
          },
        }
      }
    }),

    BlogModule,
    CategoriesModule,
    UserModule,
    AuthModule,
    

   
  ]
})
export class AppModule {}
