// backend/src/models/User.ts

import { Prisma } from '@prisma/client';

export interface User {
  id: number;
  username: string;
  password: string;
  role: 'user' | 'admin';
}

export type CreateUserInput = Prisma.UserCreateInput;
export type UpdateUserInput = Prisma.UserUpdateInput;
