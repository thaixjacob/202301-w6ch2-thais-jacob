import crypto from 'node:crypto';
import { RequestHandler } from 'express';
import { createThing, Thing, thingsBox } from './things-i-know-model.js';

export const getThingsController: RequestHandler = (_req, res) => {
  res.json(thingsBox);
};

export const createThingsController: RequestHandler = (req, res) => {
  const id = crypto.randomUUID();
  const thing: Thing = {
    id,
    ...req.body,
  };
  createThing(thing);
  res.status(201).json(thing);
};
