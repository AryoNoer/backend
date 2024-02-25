// backend/src/types/express.d.ts

import { PrismaClient } from '@prisma/client';

declare module 'express' {
  interface Request {
    user?: PrismaClient.User; // Sesuaikan dengan model pengguna yang Anda gunakan
  }
}
