import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Metadata } from '@grpc/grpc-js';
import { PrismaService } from '@/service/prisma.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
    private prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    console.log('-- AuthGuard --');
    const isPublic = this.reflector.getAllAndOverride<boolean>('public', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const meta: Metadata = context.getArgByIndex(1);
    const token = this.extractTokenFromHeader(
      meta.get('Authorization').toString(),
    );
    if (!token) {
      throw new UnauthorizedException();
    }
    let user = null;
    try {
      user = await this.jwtService.verifyAsync(token, {
        secret: 'secret',
      });
      const role = await this.prisma.userRoles.findFirst({
        where: { user_id: user.userId },
      });
      if (role) {
        console.log('user:'+ role.user_id);
        console.log('role:'+ role.role_id);
        request.user = { id: role.user_id, role: role.role_id };
      }
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(param: string): string | undefined {
    const [type, token] = param.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
