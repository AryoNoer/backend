// backend/src/models/Order.ts

import { Prisma } from '@prisma/client';

export interface Order {
  id: number;
  userId: number;
  menuId: number;
  quantity: number;
}

export type CreateOrderInput = Prisma.OrderCreateInput;
export type UpdateOrderInput = Prisma.OrderUpdateInput;
