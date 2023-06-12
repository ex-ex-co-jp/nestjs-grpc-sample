import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/service/prisma.service';
import { Resource } from '@prisma/client';

@Injectable()
export class CreateService {
  constructor(private prisma: PrismaService) {}

  async createResource(createResourceName: string): Promise<Resource | null> {
    return this.prisma.resource.create({
      data: {
        name: createResourceName,
      },
    });
  }
}
