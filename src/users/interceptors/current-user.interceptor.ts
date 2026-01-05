import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsersService } from '../users.service';
import { RequestWithUser } from '../request-with-user.interface';

@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {
  constructor(private readonly usersService: UsersService) {}

  async intercept(
    context: ExecutionContext,
    handler: CallHandler,
  ): Promise<Observable<unknown>> {
    const request = context.switchToHttp().getRequest<RequestWithUser>();

    const { userId } = request.session || {};

    if (userId) {
      const user = await this.usersService.findOne(userId);
      if (user) {
        request.currentUser = user;
      } else {
        request.currentUser = undefined;
      }
    }

    return handler.handle();
  }
}
