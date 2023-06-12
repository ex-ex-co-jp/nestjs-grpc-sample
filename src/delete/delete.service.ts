import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/service/prisma.service';
import { Resource, RoleResources } from '@prisma/client';

@Injectable()
export class DeleteService {
  constructor(private prisma: PrismaService) {}
  async deleteRoleResource(resourceID: number): Promise<RoleResources | null> {
    return this.prisma.roleResources.delete({ where: { id: resourceID } });
  }
}
