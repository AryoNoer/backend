// backend/src/config/auth.ts
import { Request, Response, NextFunction } from 'express';

// Jangan lakukan verifikasi otentikasi, cukup lanjutkan ke fungsi selanjutnya
export const authenticateUser = (req: Request, res: Response, next: NextFunction) => {
  next();
};
