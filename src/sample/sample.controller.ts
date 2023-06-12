import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Sample, SampleById } from '@/proto/sample';
import { SampleService } from './sample.service';
@Controller()
export class SampleController {
  constructor(private readonly sampleService: SampleService,) {}
  @GrpcMethod('SamplesService', 'FindOne')
  async findOne(data: SampleById): Promise<Sample> {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ] as Sample[];
    const user = await this.sampleService.user({ id: data.id });
    console.log({ user });
    const filteredItems = items.filter((item) => item.id === data.id);
    return filteredItems[0];
  }
}
