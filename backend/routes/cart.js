import  express  from 'express';
import { getCartItems, addCartItem, deleteCartItems, deleteCartItem } from '../controllers/cart.js';

const router = express.Router();

router.get('/', getCartItems);
router.post('/', addCartItem);
router.delete('/', deleteCartItems);
router.delete('/:id', deleteCartItem);

export default router;