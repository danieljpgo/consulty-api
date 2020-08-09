import { Router } from 'express';
import { create } from './controller';

const router = Router();

router.post('/', create);

export default router;