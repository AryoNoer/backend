// backend/src/routes/menuRoutes.ts
import express from 'express';
import { addMenu, getMenu } from '../controllers/MenuController';

const router = express.Router();

// Endpoint untuk menambahkan menu
router.post('/add', addMenu);

// Endpoint untuk mendapatkan daftar menu
router.get('/', getMenu);

export default router;
