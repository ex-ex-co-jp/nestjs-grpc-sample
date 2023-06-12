import { Controller, UseGuards } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { LoginRequest, LoginResponse } from '@/login/login';
import { LoginService } from '@/login/login.service';
import { Metadata } from '@grpc/grpc-js';
@Controller()
export class LoginController {
  constructor(private readonly service: LoginService) {}
  @GrpcMethod('LoginService', 'login')
  async login(data: LoginRequest, metadata?: Metadata): Promise<LoginResponse> {
    console.log('---start---');
    const token = await this.service.login(data.username, data.password);
    metadata.add('TOKEN', token);
    console.log('---end---');
    return { token: token };
  }
}
