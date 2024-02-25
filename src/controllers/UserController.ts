// backend/src/controllers/UserController.ts
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, password, role } = req.body;

    // Cek apakah username sudah ada dalam database
    const existingUser = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // Buat pengguna baru
    const newUser = await prisma.user.create({
      data: {
        username,
        password, // Anda seharusnya meng-hash password sebelum menyimpannya di produksi
        role,
      },
    });

    res.status(201).json({ user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    // Temukan pengguna berdasarkan username
    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    // Periksa apakah pengguna ditemukan dan password cocok
    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Berhasil login
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Tambahkan lebih banyak fungsi pengontrol pengguna jika diperlukan
