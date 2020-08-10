import { Router } from 'express';
import { create, count } from './controller';

const router = Router();

router.get('/count', count);
router.post('/', create);

export default router;