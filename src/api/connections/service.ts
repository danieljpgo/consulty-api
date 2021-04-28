import type { Transaction } from 'knex';
import { create, count, index } from './repository';

export const getConnections = async (trx?: Transaction) => {
  const connections = await index(trx);

  return connections;
};

export const countConnection = async (trx?: Transaction) => {
  const [{ total }] = await count(trx);

  return { total };
};

export const createConnection = async (userId: number, trx?: Transaction) => {
  const [id] = await create(userId, trx);

  return { id };
};
