import { Router } from 'express';
import { index } from './controller';

const router = Router()
  .get('/', index);

export default router;
