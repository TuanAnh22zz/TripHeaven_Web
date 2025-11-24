import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {User} from 'src/models/UserModel/user.model'
import { JwtService } from '@nestjs/jwt';
import { Op } from 'sequelize';

@Injectable()
export class UserService {
  
  constructor(
    @InjectModel(User) private readonly userModel: typeof User){}

  async findByEmail(email: string) { 
      return await this.userModel.findOne({where: {email}})
  }


  async findByEmailOrUsername(identifier: string): Promise<User | null> {
    return this.userModel.findOne({
        where: {
            [Op.or]: [
                { email: identifier },
                { username: identifier }
            ]
        }
    });
  }

 
  async register(createUserDto: CreateUserDto){
    const user = await this.findByEmailOrUsername(createUserDto.email)
    if(user){
      throw new BadRequestException('Tài khoản đã được đăng kí.')
    }
    

     await this.userModel.create(createUserDto as any)

     return {message: "Đã đăng kí thành công"};
  }


  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user'
  }

  findAll() {
    return this.userModel.findAll()
  }

  findOne(id: number) {
    return `This action returns a #${id} user`
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
