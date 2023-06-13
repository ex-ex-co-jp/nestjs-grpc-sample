/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "read";

export interface ReadRequest {
  id: number;
}

export interface ReadResponse {
  name: string;
}

export const READ_PACKAGE_NAME = "read";

export interface ReadServiceClient {
  readResource(request: ReadRequest): Observable<ReadResponse>;
}

export interface ReadServiceController {
  readResource(request: ReadRequest): Promise<ReadResponse> | Observable<ReadResponse> | ReadResponse;
}

export function ReadServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["readResource"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("ReadService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("ReadService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const READ_SERVICE_NAME = "ReadService";
