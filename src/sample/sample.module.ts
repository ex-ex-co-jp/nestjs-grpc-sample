import { Module } from '@nestjs/common';
import { SampleController } from './sample.controller';
import { SampleService } from './sample.service';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [],
  controllers: [SampleController],
  providers: [SampleService, PrismaService],
})
export class SampleModule {}
