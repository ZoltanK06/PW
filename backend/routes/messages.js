import express from 'express';
import {getMessages, addMessage, deleteMessage, updateMessage} from '../controllers/messages.js'

const router = express.Router();

router.get('/', getMessages);
router.post('/', addMessage);
router.delete('/:id', deleteMessage);
router.patch('/:id', updateMessage);

export default router;