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
    const isPublic = this.reflector.getAllAndOverride<boolean>('public', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }
    const request: Metadata = context.getArgByIndex(1);
    const token = this.extractTokenFromHeader(
      request.get('Authorization').toString(),
    );
    if (!token) {
      throw new UnauthorizedException();
    }
    let user = null;
    try {
      user = await this.jwtService.verifyAsync(token, {
        secret: 'secret',
      });
      request.add('user', user);
    } catch {
      throw new UnauthorizedException();
    }
    try {
      const role = await this.prisma.roleResources.findFirst({
        where: { id: user.id },
      });
      if (role) {
        request.add('role_id', role.role_id.toString());
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
