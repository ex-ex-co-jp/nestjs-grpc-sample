import { Controller, UseGuards } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UpdateRequest, UpdateResponse } from '@/update/update';
import { UpdateService } from '@/update/update.service';
import { SuperGuard } from '@/guard/super.guard';
@Controller()
export class UpdateController {
  constructor(private readonly updateService: UpdateService) {}
  @UseGuards(SuperGuard)
  @GrpcMethod('UpdateService', 'UpdateResource')
  async updateResource(data: UpdateRequest): Promise<UpdateResponse> {
    await this.updateService.updateResource(data.id, data.name);

    return { id: data.id, name: data.name } as UpdateResponse;
  }
}
