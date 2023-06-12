import { Module } from '@nestjs/common';
import { UpdateController } from '@/update/update.controller';
import { UpdateService } from '@/update/update.service';
import { PrismaService } from '@/service/prisma.service';
import { JwtService } from '@nestjs/jwt';
@Module({
  imports: [],
  controllers: [UpdateController],
  providers: [UpdateService, PrismaService, JwtService],
})
export class UpdateModule {}
