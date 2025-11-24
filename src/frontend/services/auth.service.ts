import { API_Response } from "src/backend/src/common/interfaces"
import { User } from "src/backend/src/models/UserModel/user.model"
import api from "./api"

export interface LoginCredentials {
   
    username: string
    password: string
}

export interface RegisterData {
    email: string
    password: string
    username: string
}

type LoginResponseData = {
    accessToken: string
    user: User;
}

export const login = async (credentials: LoginCredentials): Promise<API_Response<LoginResponseData>> => {
    const response = await api.post<API_Response<LoginResponseData>>('/auth/login', credentials)
    return response.data
}

export const register = async (data: RegisterData): Promise<API_Response<null>> => {
    const response = await api.post<API_Response<null>>('/user/register', data)
    return response.data;
}

const authService = {
    login,
    register
}

export default authService;