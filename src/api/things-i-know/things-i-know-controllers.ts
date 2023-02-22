import { RequestHandler } from 'express';
import thingsIKnow from './things-i-know-model.js';

export const getThingsController: RequestHandler = (_req, res) => {
  res.json(thingsIKnow);
};
