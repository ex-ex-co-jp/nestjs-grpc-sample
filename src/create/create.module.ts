import { Module } from '@nestjs/common';
import { CreateController } from './create.controller';
import { CreateService } from './create.service';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [],
  controllers: [CreateController],
  providers: [CreateService, PrismaService],
})
export class CreateModule {}
