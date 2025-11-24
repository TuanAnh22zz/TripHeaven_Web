
import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { Request, Response } from 'express';
import { API_Response } from '../interfaces/index';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
    private readonly logger = new Logger(AllExceptionFilter.name)
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status:number
    let message: string
    let error: any

    if(exception instanceof HttpException){
        status=exception.getStatus();
        const exceptionResponse = exception.getResponse();
       
        if(typeof exceptionResponse === "string") {
            message=exceptionResponse
        }
        else if(typeof exceptionResponse === "object"){
            const exceptionResponseObj = exceptionResponse as Record<string, any>
            message = exceptionResponseObj.message || exceptionResponseObj.error || "Có lỗi xảy ra"

            if(Array.isArray(exceptionResponseObj.message)) {
                message= "Dữ liệu không hợp lệ"
                error= exceptionResponseObj.message
                this.logger.error(`[${request.method}] ${request.url} - Status: ${error}`)

            }
           
        }
        else
        {
            message="Có lỗi xảy ra"
            this.logger.error(`[${request.method}] ${request.url} - Status: ${message}`)

        }
    }
    else {
        status =HttpStatus.INTERNAL_SERVER_ERROR
        message="Hệ thống có lỗi"
        this.logger.error(exception);

    }

    const errResponse: API_Response<any> = {
        success: false,
        message,
        ...(error && {error}),
        date: new Date().toLocaleString("vi-VN", {timeZone: "Asia/Ho_Chi_Minh", hour12: false}),
        path: request.url

    }   
    response.status(status).json(errResponse)


  }
}
