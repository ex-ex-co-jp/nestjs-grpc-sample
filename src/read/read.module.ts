import { Module } from '@nestjs/common';
import { ReadController } from './read.controller';
import { ReadService } from './read.service';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [],
  controllers: [ReadController],
  providers: [ReadService, PrismaService],
})
export class ReadModule {}
