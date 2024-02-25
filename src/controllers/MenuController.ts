// backend/src/controllers/MenuController.ts
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const addMenu = async (req: Request, res: Response) => {
  try {
    const { image, name, price, description } = req.body;

    const menu = await prisma.menu.create({
      data: {
        image,
        name,
        price,
        description,
      },
    });

    res.json({ menu });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getMenu = async (req: Request, res: Response) => {
  try {
    const menus = await prisma.menu.findMany();
    res.json({ menus });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
