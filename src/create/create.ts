/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "create";

export interface CreateRequest {
  name: string;
}

export interface CreateResponse {
  id: number;
  name: string;
}

export const CREATE_PACKAGE_NAME = "create";

export interface CreateServiceClient {
  createResource(request: CreateRequest): Observable<CreateResponse>;
}

export interface CreateServiceController {
  createResource(request: CreateRequest): Promise<CreateResponse> | Observable<CreateResponse> | CreateResponse;
}

export function CreateServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createResource"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("CreateService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("CreateService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const CREATE_SERVICE_NAME = "CreateService";
