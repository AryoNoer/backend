// backend/src/config/adminAuth.ts
import { Request, Response, NextFunction } from 'express';

// Jangan lakukan verifikasi otentikasi admin, cukup lanjutkan ke fungsi selanjutnya
export const authenticateAdmin = (req: Request, res: Response, next: NextFunction) => {
  next();
};
