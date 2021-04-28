import type { Transaction } from 'knex';
import { database } from '../../database/connection';

export interface Connection {
  user_id: number;
  created_at: string;
}

export const index = (trx?: Transaction) => {
  const db = trx || database;

  return db<Connection, Connection[]>('users')
    .select('*');
};

export const count = (trx?: Transaction) => {
  const db = trx || database;

  return db('connections')
    .count('* as total');
};

export const create = (userId: number, trx?: Transaction) => {
  const db = trx || database;

  return db<Connection, [number]>('connections')
    .insert({ user_id: userId });
};
