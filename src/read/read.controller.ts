import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ReadRequest, ReadResponse } from '@/read/read';
import { ReadService } from '@/read/read.service';
@Controller()
export class ReadController {
  constructor(private readonly readService: ReadService,) {}
  @GrpcMethod('ReadService', 'ReadResource')
  async readResource(data: ReadRequest): Promise<ReadResponse> {
    const resource = await this.readService.readResource(data.id);
    console.log({ resource });
    // const filteredItems = items.filter((item) => item.id === data.id);
    // return filteredItems[0];
    // 対象がnullかチェックしているが、nullの場合何で返す？
    const resourceName = resource ? resource.name : '';
    return {name:resourceName} as ReadResponse;
    // return {name:resource.name} as ReadResponse;
  }
}
