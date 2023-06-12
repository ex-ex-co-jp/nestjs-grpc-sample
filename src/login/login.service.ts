import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/service/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async login(username: string, password: string): Promise<string> {
    console.log('--service--');
    const user = await this.prisma.user.findFirst({
      where: { name: username },
    });
    if (!user) {
      throw new Error('Invalid username or password');
    }

    const passwordValid = await this.validatePassword(password, user.password);
    if (!passwordValid) {
      throw new Error('Invalid username or password');
    }

    const payload = { userId: user.id, username: user.name };
    return this.jwtService.sign(payload, { secret: 'secret', expiresIn: '1h' });
  }

  private async validatePassword(
    provided: string,
    actual: string,
  ): Promise<boolean> {
    return provided == actual;
  }
}
