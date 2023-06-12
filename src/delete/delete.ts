/* eslint-disable */
import { Metadata } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "delete";

export interface DeleteRequest {
  id: number;
}

export interface DeleteResponse {
  message: string;
}

export const DELETE_PACKAGE_NAME = "delete";

export interface DeleteServiceClient {
  deleteResource(request: DeleteRequest, metadata?: Metadata): Observable<DeleteResponse>;
}

export interface DeleteServiceController {
  deleteResource(
    request: DeleteRequest,
    metadata?: Metadata,
  ): Promise<DeleteResponse> | Observable<DeleteResponse> | DeleteResponse;
}

export function DeleteServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["deleteResource"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("DeleteService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("DeleteService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const DELETE_SERVICE_NAME = "DeleteService";
