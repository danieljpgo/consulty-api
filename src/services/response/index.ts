import type { Response } from 'express';

// @TODO status number for now
export const success = (response: Response, status?: number) => <T>(entity: T) => {
  if (entity) {
    response.status(status || 200).json(entity);
  }
  return null;
};

export const notFound = (response: Response) => <T>(entity: T[]) => {
  const [value] = entity;

  if (value) {
    return value;
  }
  response.status(404).end();
  return null;
};
