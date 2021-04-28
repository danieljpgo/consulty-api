import type { Transaction } from 'knex';
import { database } from '../../database/connection';

export interface ClassSchedule {
  class_id: number;
  week_day: number;
  from: number;
  to: number;
}

export const create = (classSchedule: ClassSchedule[], trx?: Transaction) => {
  const db = trx || database;

  return db<ClassSchedule, [number]>('class_schedule')
    .insert(classSchedule);
};
