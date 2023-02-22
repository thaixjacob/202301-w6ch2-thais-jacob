import express from 'express';
import {
  getThingsController,
  createThingsController,
} from './things-i-know-controllers.js';

const router = express.Router();

router.route('/').get(getThingsController).post(createThingsController);

export default router;
