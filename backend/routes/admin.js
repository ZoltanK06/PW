import express from 'express';
import {getAdmins, addAdmin} from '../controllers/admin.js'

const router = express.Router();

router.get('/', getAdmins);
router.post('/', addAdmin);

export default router;