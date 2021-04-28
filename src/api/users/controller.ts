import type { Response, Request, NextFunction } from 'express';
import { getUsers } from './service';

export const index = async (_: Request, response: Response, next: NextFunction) => {
  try {
    const users = await getUsers();
    return response
      .json(users);
  } catch (error) {
    return next(error);
  }
};
