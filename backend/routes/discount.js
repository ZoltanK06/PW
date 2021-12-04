import express from 'express';
import {getDiscounts, addDiscount, deleteDiscount} from '../controllers/discounts.js'

const router = express.Router();

router.get('/', getDiscounts);
router.post('/', addDiscount);
router.delete('/:id', deleteDiscount);

export default router;