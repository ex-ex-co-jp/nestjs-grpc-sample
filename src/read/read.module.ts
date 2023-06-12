import { Module } from '@nestjs/common';
import { ReadController } from '@/read/read.controller';
import { ReadService } from '@/read/read.service';
import { PrismaService } from '@/service/prisma.service';

@Module({
  imports: [],
  controllers: [ReadController],
  providers: [ReadService, PrismaService],
})
export class ReadModule {}
