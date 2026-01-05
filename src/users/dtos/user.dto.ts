import { Expose } from 'class-transformer';

export class UserDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @Expose()
  id: number;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @Expose()
  email: string;
}
