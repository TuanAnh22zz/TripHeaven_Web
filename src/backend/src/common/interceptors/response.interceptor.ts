
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_Response } from '../interfaces/index';



@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, API_Response<T>> {
    private getDefaultMessage(method: string): string {
        switch(method)
        {
            case "POST":
                return "Tạo dữ liệu thành công. "
            case "GET":
                return "Lấy dữ liệu thành công. "
            case "DELETE":
                return "Xoá dữ liệu thành công. "
            case "PATCH":
                return "Cập nhật dữ liệu thành công. "
            default:
                return "Yêu cầu đã hoàn thành. "
        }
    }
  intercept(context: ExecutionContext, next: CallHandler): Observable<API_Response<T>> {
    const request =context.switchToHttp().getRequest()
    return next
    .handle()
    .pipe(map(data => {
        if(data && typeof data === "object" && 'success' in data)
        {
            return data
        }

        let finalMessage = this.getDefaultMessage(request.method) 

        if(data && typeof data === "object" && 'message' in data)
        {
            finalMessage = data.message

            const {message, ...rest} = data
            data = Object.keys(rest).length > 0 ? rest : null

        }
        return {
            success: true,
            message: finalMessage,
            data,
            date: new Date().toLocaleString("vi-VN", {timeZone: "Asia/Ho_Chi_Minh", hour12: false}),
            path: request.url

        }
    }));
  }
}
