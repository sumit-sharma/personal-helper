// src/common/types.ts

import { ApiProperty } from '@nestjs/swagger';

export type UserRoleType = 'admin' | 'user' | 'guest';

// User Role Enum
export enum UserRoleEnum {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
}

// Common Response Interface
export interface ApiResponseType<T = any> {
  success: boolean;
  message: string;
  data?: T;
  statusCode: number;
}

export class IsignIn {
  @ApiProperty()
  readonly username: string;

  @ApiProperty()
  readonly password: string;
}
