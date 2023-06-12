import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UpdateRequest, UpdateResponse } from '@/update/update';
import { UpdateService } from '@/update/update.service';
@Controller()
export class UpdateController {
  constructor(private readonly updateService: UpdateService) {}
  @GrpcMethod('UpdateService', 'UpdateResource')
  async updateResource(data: UpdateRequest): Promise<UpdateResponse> {
    await this.updateService.updateResource(data.id, data.name);

    return { id: data.id, name: data.name } as UpdateResponse;
  }
}
