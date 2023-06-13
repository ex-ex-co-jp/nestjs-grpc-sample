/* eslint-disable */
import { Metadata } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "update";

export interface UpdateRequest {
  id: number;
  name: string;
}

export interface UpdateResponse {
  id: number;
  name: string;
}

export const UPDATE_PACKAGE_NAME = "update";

export interface UpdateServiceClient {
  updateResource(request: UpdateRequest, metadata?: Metadata): Observable<UpdateResponse>;
}

export interface UpdateServiceController {
  updateResource(
    request: UpdateRequest,
    metadata?: Metadata,
  ): Promise<UpdateResponse> | Observable<UpdateResponse> | UpdateResponse;
}

export function UpdateServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["updateResource"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("UpdateService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("UpdateService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const UPDATE_SERVICE_NAME = "UpdateService";
