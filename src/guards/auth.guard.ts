import { CanActivate, ExecutionContext } from '@nestjs/common';
import { RequestWithUser } from 'src/interfaces/request-with-user.interface';

export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<RequestWithUser>();

    return !!request.session?.userId;
  }
}
