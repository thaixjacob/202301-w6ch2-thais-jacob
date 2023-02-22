import express from 'express';
import { getThingsController } from './things-i-know-controllers.js';

const router = express.Router();

router.route('/').get(getThingsController);

export default router;
