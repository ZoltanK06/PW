import express from 'express';
import {getOrders, addOrder, deleteOrder } from '../controllers/orders.js';

const router = express.Router();

router.get('/', getOrders);
router.post('/', addOrder);
router.delete('/:id', deleteOrder);

export default router;