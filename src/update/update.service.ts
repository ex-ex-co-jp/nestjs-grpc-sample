import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/service/prisma.service';
import { Resource } from '@prisma/client';

@Injectable()
export class UpdateService {
  constructor(private prisma: PrismaService) {}

  async updateResource(
    resourceId: number,
    resourceName: string,
  ): Promise<Resource | null> {
    return this.prisma.resource.update({
      where: {
        id: resourceId,
      },
      data: {
        name: resourceName,
      },
    });
  }
}
