import { Module } from '@nestjs/common';
import { SampleModule } from '@/sample/sample.module';
import { LoginModule } from '@/login/login.module';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '@/service/prisma.service';

@Module({
  imports: [SampleModule, LoginModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
