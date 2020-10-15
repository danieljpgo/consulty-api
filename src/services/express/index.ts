import express, { Router } from 'express';
import cors from 'cors';

export default (routes: Router) => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(routes);

  return app;
};
