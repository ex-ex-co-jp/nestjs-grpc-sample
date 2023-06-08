import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Sample, SampleById } from '@/proto/sample';
@Controller()
export class AppController {
  @GrpcMethod('SamplesService', 'FindOne')
  findOne(data: SampleById): Sample {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ] as Sample[];
    const filteredItems = items.filter((item) => item.id === data.id);
    return filteredItems[0];
  }
}
