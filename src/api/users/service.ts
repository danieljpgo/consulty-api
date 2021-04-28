import type { Transaction } from 'knex';
import { index } from './repository';

export const getUsers = async (trx?: Transaction) => {
  const users = await index(trx);

  return users;
};
