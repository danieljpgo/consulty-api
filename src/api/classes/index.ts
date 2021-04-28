import { Router } from 'express';
import { create, index } from './controller';

const router = Router()
  .get('/', index)
  .post('/', create);

export default router;
