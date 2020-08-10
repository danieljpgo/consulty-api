import { Router } from 'express';
import { create, index } from './controller';

const router = Router();

router.get('/', index);
router.post('/', create);

export default router;