import type { Transaction } from 'knex';
import type { ClassSchedule } from './repository';
import { create } from './repository';

export const createClassSchedule = async (classSchedule: ClassSchedule[], trx?: Transaction) => {
  const [id] = await create(classSchedule, trx);

  return { id };
};
