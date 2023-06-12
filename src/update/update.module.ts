import { Module } from '@nestjs/common';
import { UpdateController } from '@/update/update.controller';
import { UpdateService } from '@/update/update.service';
import { PrismaService } from '@/service/prisma.service';

@Module({
  imports: [],
  controllers: [UpdateController],
  providers: [UpdateService, PrismaService],
})
export class UpdateModule {}
