import { Module } from '@nestjs/common';
import { SampleModule } from './sample/sample.module';
import { CreateModule } from './create/create.module';
import { ReadModule } from './read/read.module';
import { SampleModule } from '@/sample/sample.module';
import { LoginModule } from '@/login/login.module';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '@/service/prisma.service';

@Module({
  imports: [SampleModule, CreateModule, ReadModule, ],
  controllers: [],
  providers: [],
  imports: [SampleModule, LoginModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
