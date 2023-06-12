import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/service/prisma.service';
import { Resource } from '@prisma/client';

@Injectable()
export class ReadService {
  constructor(private prisma: PrismaService) {}

  async readResource(id: number): Promise<Resource | null> {
    return this.prisma.resource.findUnique({
      where: {
        id: id,
      },
    });
  }
}
