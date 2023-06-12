import { Module } from '@nestjs/common';
import { ReadController } from '@/read/read.controller';
import { ReadService } from '@/read/read.service';
import { PrismaService } from '@/service/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [],
  controllers: [ReadController],
  providers: [ReadService, PrismaService, JwtService],
})
export class ReadModule {}
