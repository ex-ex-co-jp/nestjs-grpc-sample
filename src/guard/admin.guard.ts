import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@/guard/auth.guard';

@Injectable()
export class AdminGuard extends AuthGuard {
  async canActivate(context: ExecutionContext) {
    console.log('-- AdminGuard S --');
    await super.canActivate(context);
    const request = context.switchToHttp().getRequest();
    console.log(request);
    console.log('-- AdminGuard E --');
    return request.user.role === 1;
  }
}
