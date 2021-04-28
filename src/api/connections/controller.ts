import type { Response, Request, NextFunction } from 'express';
import { countConnection, createConnection, getConnections } from './service';

export const index = async (_: Request, response: Response, next: NextFunction) => {
  try {
    const connections = await getConnections();
    return response
      .json(connections);
  } catch (error) {
    return next(error);
  }
};

export const count = async (_: Request, response: Response, next: NextFunction) => {
  try {
    const total = await countConnection();

    return response
      .json(total);
  } catch (error) {
    return next(error);
  }
};

export const create = async (request: Request, response: Response, next: NextFunction) => {
  const { user_id } = request.body;
  try {
    const id = await createConnection(user_id);

    return response
      .status(201)
      .json(id);
  } catch (error) {
    return next(error);
  }
};
