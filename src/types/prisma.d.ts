// types/express.d.ts

import { PrismaClient } from '@prisma/client';

declare module 'express-serve-static-core' {
  interface Request {
    user?: PrismaClient.User;
  }
}
