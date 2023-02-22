import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import apiRouter from './api/api-router.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/v1', apiRouter);

app.listen(port, () => {
  'hello word';
});
