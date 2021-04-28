import { Router } from 'express';
import classes from './classes';
import connections from './connections';
import users from './users';

const router = Router()
  .use('/classes', classes)
  .use('/connections', connections)
  .use('/users', users);

export default router;
