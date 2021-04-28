import { Router } from 'express';
import { create, count, index } from './controller';

const router = Router()
  .get('/count', count)
  .get('/', index)
  .post('/', create);

export default router;
