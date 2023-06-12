import { Controller, UseGuards } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Sample, SampleById } from '@/sample/sample';
import { SampleService } from './sample.service';
import { Metadata } from '@grpc/grpc-js';
import { AuthGuard } from '@/guard/auth.guard';
@Controller()
export class SampleController {
  constructor(private readonly service: SampleService) {}
  @GrpcMethod('SamplesService', 'FindOne')
  @UseGuards(AuthGuard)
  async findOne(data: SampleById, metadata?: Metadata): Promise<Sample> {
    console.log(data);
    console.log(metadata);
    console.log(metadata.get('user'));
    console.log(metadata.get('role'));
    const user = await this.service.user({ id: data.id });
    return {
      id: user.id,
      name: user.name,
    };
  }
}
