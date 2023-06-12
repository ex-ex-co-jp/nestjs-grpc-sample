import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Resource, RoleResources } from '@prisma/client';

@Injectable()
export class CreateService {
  constructor(private prisma: PrismaService) {}

  async createResource(
    createResourceName: string,
    ): Promise<Resource | null>{
    return this.prisma.resource.create({
      data: {
        name: createResourceName,
      },
    });
  }
  async createRoleResource(
    createRoleID: number, createResourceID: number,
    ): Promise<RoleResources | null>{
    return this.prisma.roleResources.create({
      data: {
        role_id: createRoleID,
        resource_id: createResourceID,
      },
    });
  }
}
