import express, { Router } from 'express';

export default (routes: Router) => {
  const app = express();

  app.use(express.json());
  app.use(routes);

  return app;
}