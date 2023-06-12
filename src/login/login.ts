/* eslint-disable */
import { Metadata } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "sample";

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export const SAMPLE_PACKAGE_NAME = "sample";

export interface LoginServiceClient {
  login(request: LoginRequest, metadata?: Metadata): Observable<LoginResponse>;
}

export interface LoginServiceController {
  login(request: LoginRequest, metadata?: Metadata): Promise<LoginResponse> | Observable<LoginResponse> | LoginResponse;
}

export function LoginServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["login"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("LoginService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("LoginService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const LOGIN_SERVICE_NAME = "LoginService";
