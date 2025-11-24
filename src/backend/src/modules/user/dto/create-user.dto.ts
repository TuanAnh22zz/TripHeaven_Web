import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator"
import { REGEX } from "src/utils/validator"

export class CreateUserDto {

    @IsString({message: "Username phải là chuỗi"})
    @IsNotEmpty({message: "Username không được bỏ trống"})
    @MinLength(3, { message: 'Username phải có ít nhất 3 ký tự.' })
    @MaxLength(20, { message: 'Username không được vượt quá 20 ký tự.' })
    username: string

    @IsString({message: "Email phải là chuỗi"})
    @IsNotEmpty({message: "Email không được bỏ trống"})
   
    email: string

    @IsString({message: "Password phải là chuỗi"})
    @IsNotEmpty({message: "Password không được bỏ trống"})
    @Matches(REGEX.STRONG_PASSWORD)
    password: string
}
