import { Module } from '@nestjs/common';
import { CreateController } from '@/create/create.controller';
import { CreateService } from '@/create/create.service';
import { PrismaService } from '@/service/prisma.service';

@Module({
  imports: [],
  controllers: [CreateController],
  providers: [CreateService, PrismaService],
})
export class CreateModule {}
