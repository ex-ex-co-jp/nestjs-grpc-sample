import { Controller, UseGuards } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ReadRequest, ReadResponse } from '@/read/read';
import { ReadService } from '@/read/read.service';
import { AuthGuard } from '@/guard/auth.guard';
@Controller()
export class ReadController {
  constructor(private readonly readService: ReadService) {}
  @UseGuards(AuthGuard)
  @GrpcMethod('ReadService', 'ReadResource')
  async readResource(data: ReadRequest): Promise<ReadResponse> {
    const resource = await this.readService.readResource(data.id);
    const resourceName = resource ? resource.name : '';
    return { name: resourceName } as ReadResponse;
  }
}
