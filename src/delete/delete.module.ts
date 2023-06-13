import { Module } from '@nestjs/common';
import { DeleteController } from '@/delete/delete.controller';
import { DeleteService } from '@/delete/delete.service';
import { PrismaService } from '@/service/prisma.service';
import { JwtService } from '@nestjs/jwt';
@Module({
  imports: [],
  controllers: [DeleteController],
  providers: [DeleteService, PrismaService, JwtService],
})
export class DeleteModule {}
