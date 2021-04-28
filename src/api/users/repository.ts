import type { Transaction } from 'knex';
import { database } from '../../database/connection';

export interface User {
  bio: string;
  name: string;
  avatar: string;
  whatsapp: string;
}

export const index = (trx?: Transaction) => {
  const db = trx || database;

  return db<User, User[]>('users')
    .select('*');
};
