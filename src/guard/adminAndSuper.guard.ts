import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@/guard/auth.guard';

@Injectable()
export class AdminAndSuperGuard extends AuthGuard {
  async canActivate(context: ExecutionContext) {
    console.log('-- AdminAndSuperGuard S --');
    await super.canActivate(context);
    const request = context.switchToHttp().getRequest();
    console.log(request);
    console.log('-- AdminAndSuperGuard E --');
    return request.user.role === 1 || request.user.role === 2;
  }
}
