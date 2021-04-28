import type { Transaction } from 'knex';
import type { Classes, ClassesParams } from './repository';
import type { User } from '../users/repository';
import { hourToMinutes } from '../../utils/hourToMinutes';
import { database } from '../../database/connection';
import { createClassSchedule } from '../class-schedule/service';
import { createUser } from '../users/service';
import { index, create } from './repository';

interface ScheduleItem {
  week_day: number,
  from: string,
  to: string,
}

interface CreateClassesParams extends User, Omit<Classes, 'user_id'> {
  schedule: ScheduleItem[]
}

export const getScheduleClasses = async (params: ClassesParams, trx?: Transaction) => {
  const { week_day, subject, time } = params;
  const timeInMinutes = time && hourToMinutes(time);

  return index({ week_day, subject, time: timeInMinutes }, trx);
};

export const createClassesWithUserSchedule = async (params: CreateClassesParams) => {
  const {
    whatsapp,
    avatar,
    name,
    bio,
    subject,
    cost,
    schedule,
  } = params;
  const trx = await database.transaction();

  try {
    const { id: userId } = await createUser({
      name, avatar, whatsapp, bio,
    }, trx);
    const [classesId] = await create({
      subject, cost, user_id: userId,
    }, trx);

    const { id: classScheduleId } = await createClassSchedule(
      schedule.map((item) => ({
        class_id: classesId,
        week_day: item.week_day,
        from: hourToMinutes(item.from),
        to: hourToMinutes(item.to),
      })), trx,
    );

    await trx.commit();

    return { id: classScheduleId };
  } catch (error) {
    await trx.rollback();
    throw new Error(error);
  }
};
