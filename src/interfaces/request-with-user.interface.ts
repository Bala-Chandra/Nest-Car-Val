import { Request } from 'express';
import { User } from '../users/user.entity'; // or UserDto

export interface RequestWithUser extends Request {
  currentUser?: User;
  session?: {
    userId?: number;
  };
}
