import { Controller, UseGuards } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Sample, SampleById } from '@/sample/sample';
import { SampleService } from '@/sample/sample.service';
import { AdminGuard } from '@/guard/admin.guard';
@Controller()
export class SampleController {
  constructor(private readonly service: SampleService) {}
  @GrpcMethod('SamplesService', 'FindOne')
  @UseGuards(AdminGuard)
  async findOne(data: SampleById): Promise<Sample> {
    console.log(data);
    const user = await this.service.user({ id: data.id });
    return {
      id: user.id,
      name: user.name,
    };
  }
}
