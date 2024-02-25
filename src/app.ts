// backend/src/app.ts
import express from 'express';
import userRoutes from './routes/userRoutes';
import menuRoutes from './routes/menuRoutes';
import orderRoutes from './routes/orderRoutes';

const app = express();

app.use(express.json());

// Tambahkan rute tanpa otentikasi
app.use('/', (req, res) => {
    res.send('Hello, World!');
});
app.use('/user', userRoutes);
app.use('/menu', menuRoutes);
app.use('/order', orderRoutes);

export default app;
