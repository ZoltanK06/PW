import express from 'express';
import Program from '../models/programScheme.js';
import {getPrograms } from '../controllers/programs.js';

const router = express.Router();

router.get('/', getPrograms);
// router.post('/', addPrograms);

export default router;