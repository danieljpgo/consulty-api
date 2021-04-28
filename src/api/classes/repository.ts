import type { Transaction } from 'knex';
import type { User } from '../users/repository';
import { database } from '../../database/connection';

export interface Classes {
  subject: string;
  cost: number;
  user_id: number;
}

export interface ClassesParams {
  week_day: number,
  subject: string,
  time: number
}

export const create = (classes: Classes, trx?: Transaction) => {
  const db = trx || database;

  return db<Classes, [number]>('classes')
    .insert(classes);
};

export const index = (params: ClassesParams, trx?: Transaction): Promise<(Classes & User)[]> => {
  const { week_day, subject, time } = params;
  const db = trx || database;

  return db('classes')
    .whereExists((builder) => {
      builder
        .select('class_schedule.*')
        .from('class_schedule')
        .whereRaw('`class_schedule`.`class_id` = `classes`.`id`');
      if (week_day) {
        builder.whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)]);
      }
      if (time) {
        builder.whereRaw('`class_schedule`.`from` <= ??', [time]);
        builder.whereRaw('`class_schedule`.`to` > ??', [time]);
      }
    })
    .where((builder) => {
      if (subject) {
        builder.where('classes.subject', '=', subject);
      }
    })
    .join('users', 'classes.user_id', '=', 'users.id')
    .select(['classes.*', 'users.*']);
};
