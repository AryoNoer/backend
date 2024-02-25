// backend/src/models/Menu.ts

import { Prisma } from '@prisma/client';

export interface Menu {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
}

export type CreateMenuInput = Prisma.MenuCreateInput;
export type UpdateMenuInput = Prisma.MenuUpdateInput;
