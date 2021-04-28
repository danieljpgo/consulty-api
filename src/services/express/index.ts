import type { Router } from 'express';
import express from 'express';
import cors from 'cors';

export const Express = (routes: Router) => express()
  .use(cors())
  .use(express.json())
  .use(routes);
