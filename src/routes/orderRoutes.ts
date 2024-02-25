// backend/src/routes/orderRoutes.ts
import express from 'express';
import { placeOrder, getOrders } from '../controllers/OrderController';

const router = express.Router();

// Endpoint untuk menempatkan pesanan
router.post('/place-order', placeOrder);

// Endpoint untuk mendapatkan daftar pesanan
router.get('/orders', getOrders);

export default router;
