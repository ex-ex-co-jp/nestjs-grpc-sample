import { Module } from '@nestjs/common';
import { LoginController } from '@/login/login.controller';
import { LoginService } from '@/login/login.service';
import { PrismaService } from '@/service/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [],
  controllers: [LoginController],
  providers: [LoginService, PrismaService, JwtService],
})
export class LoginModule {}
