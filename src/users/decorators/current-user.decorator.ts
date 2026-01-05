import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { RequestWithUser } from '../request-with-user.interface';

export const CurrentUser = createParamDecorator(
  (_data: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest<RequestWithUser>();

    return request.currentUser;
  },
);
