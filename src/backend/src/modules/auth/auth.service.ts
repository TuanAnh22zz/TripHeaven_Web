import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
      ){}
    
      async validateUser(indentifier: string, password: string){
        const user = await this.userService.findByEmailOrUsername(indentifier)
      
        if(!user){
          throw new BadRequestException('Tài khoản chưa được đăng kí.')
        }
    
        const isCorrectPassword = user.comparePassword(password)
        if(!isCorrectPassword){
          throw new BadRequestException("Mật khẩu không chính xác.")
        }
    
        const userData = user.get({ plain: true });
       
        return {id: userData.user_id, username: userData.username, role: userData.role};
    
      }
  
      async login(user: any) 
      {
        const payload = { id: user.user_id, username: user.username ,role: user.role};
        const accessToken = await this.jwtService.signAsync({payload});
        return {message:"Đăng nhập thành công.", data: {accessToken, user}}
      }
}
