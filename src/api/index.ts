import { Router } from 'express';
import classes from './classes';
import connections from './connections';

const router = Router();

router.use('/classes', classes);
router.use('/connections', connections);

export default router;