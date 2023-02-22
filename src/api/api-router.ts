import express from 'express';
import thingsRouter from './things-i-know/things-i-know-router.js';

const router = express.Router();

router.use('/things', thingsRouter);

export default router;
