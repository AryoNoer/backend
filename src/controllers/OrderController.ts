// backend/src/controllers/OrderController.ts
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const placeOrder = async (req: Request, res: Response) => {
  try {
    const { userId, menuId, quantity } = req.body;

    const order = await prisma.order.create({
      data: {
        userId,
        menuId,
        quantity,
      },
    });

    res.json({ order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await prisma.order.findMany({
      include: {
        user: true,
        menu: true,
      },
    });

    res.json({ orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
