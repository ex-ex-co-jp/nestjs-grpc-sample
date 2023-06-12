/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "sample";

export interface SampleById {
  id: number;
}

export interface Sample {
  id: number;
  name: string;
}

export const SAMPLE_PACKAGE_NAME = "sample";

export interface SamplesServiceClient {
  findOne(request: SampleById): Observable<Sample>;
}

export interface SamplesServiceController {
  findOne(request: SampleById): Promise<Sample> | Observable<Sample> | Sample;
}

export function SamplesServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["findOne"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("SamplesService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("SamplesService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const SAMPLES_SERVICE_NAME = "SamplesService";
