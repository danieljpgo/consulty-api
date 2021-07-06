import type { Transaction } from 'knex';
import { index, create } from './repository';

export const getUsers = async (trx?: Transaction) => {
  const users = await index(trx);

  return users;
};

export const createUser = async (params: any, trx?: Transaction) => {
  const [id] = await create(params, trx);

  return { id };
};
