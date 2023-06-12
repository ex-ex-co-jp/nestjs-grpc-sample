import { Controller, UseGuards } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CreateRequest, CreateResponse } from '@/create/create';
import { CreateService } from '@/create/create.service';
import { AdminGuard } from '@/guard/admin.guard';
@Controller()
export class CreateController {
  constructor(private readonly createService: CreateService,) {}
  @UseGuards(AdminGuard)
  @GrpcMethod('CreateService', 'CreateResource')
  async createResource(data: CreateRequest): Promise<CreateResponse> {
    const resource = await this.createService.createResource(data.name);
    return { id: resource.id, name: resource.name } as CreateResponse;
  }
}
