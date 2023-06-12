import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { DeleteRequest, DeleteResponse } from '@/delete/delete';
import { DeleteService } from '@/delete/delete.service';
@Controller()
export class DeleteController {
  constructor(private readonly service: DeleteService) {}
  @GrpcMethod('CreateService', 'CreateResource')
  async createResource(data: DeleteRequest): Promise<DeleteResponse> {
    await this.service.deleteRoleResource(data.id);
    return { message: 'success' } as DeleteResponse;
  }
}
