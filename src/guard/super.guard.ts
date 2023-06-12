import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@/guard/auth.guard';

@Injectable()
export class SuperGuard extends AuthGuard {
  async canActivate(context: ExecutionContext) {
    console.log('-- SuperGuard S --');
    await super.canActivate(context);
    const request = context.switchToHttp().getRequest();
    console.log(request);
    console.log('-- SuperGuard E --');
    return request.user.role === 2;
  }
}
