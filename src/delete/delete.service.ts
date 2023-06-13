import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/service/prisma.service';
import { Resource } from '@prisma/client';

@Injectable()
export class DeleteService {
  constructor(private prisma: PrismaService) {}
  async deleteRoleResource(resourceID: number): Promise<Resource | null> {
    return this.prisma.resource.delete({ where: { id: resourceID } });
  }
}
