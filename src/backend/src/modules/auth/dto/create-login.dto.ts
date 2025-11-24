import { IsNotEmpty, IsString } from "class-validator"

export class LoginDto{

 

    @IsString({message: "Email phải là chuỗi"})
    @IsNotEmpty({message: "Email không được bỏ trống"})
    email: string

    @IsString({message: "Password phải là chuỗi"})
    @IsNotEmpty({message: "Password không được để trống"})
    password: string
}