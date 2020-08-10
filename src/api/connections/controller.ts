import { Response, Request } from 'express';
import db from '../../database/connection';

export const create = async (request: Request, response: Response) => {
  const { user_id } = request.body;

  const [id] = await db('connections')
    .insert({ user_id });

  return response
    .status(201)
    .json({ id })
}

export const count = async (request: Request, response: Response) => {
  const [totalConnections] = await db('connections')
    .count('* as total');

  const { total } = totalConnections;

  return response
    .json({ total })
}
