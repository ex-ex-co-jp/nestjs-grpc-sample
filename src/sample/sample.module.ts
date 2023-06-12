import { Module } from '@nestjs/common';
import { SampleController } from '@/sample/sample.controller';
import { SampleService } from '@/sample/sample.service';
import { PrismaService } from '@/service/prisma.service';
import { JwtService } from '@nestjs/jwt';
@Module({
  imports: [],
  controllers: [SampleController],
  providers: [SampleService, PrismaService, JwtService],
})
export class SampleModule {}
