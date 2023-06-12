import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CreateRequest, CreateResponse } from '@/create/create';
import { CreateService } from '@/create/create.service';
@Controller()
export class CreateController {
  constructor(private readonly createService: CreateService,) {}
  @GrpcMethod('CreateService', 'CreateResource')
  async createResource(data: CreateRequest): Promise<CreateResponse> {
    const resource = await this.createService.createResource(data.name);
    console.log({ resource });
    // TODO RoleIDは一旦仮で1固定
    const roleResource = await this.createService.createRoleResource(1, resource.id);
    console.log({ roleResource });
    // const filteredItems = items.filter((item) => item.id === data.id);
    // return filteredItems[0];
    return {id:resource.id, name:resource.name} as CreateResponse;
  }
}
