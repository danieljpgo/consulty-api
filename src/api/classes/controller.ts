import { Response, Request } from 'express';
import db from '../../database/connection';
import hourToMinutes from '../../utils/hourToMinutes';

interface ScheduleItem {
  week_day: number,
  from: string,
  to: string,
}

export const create = async (request: Request, response: Response) => {
  const {
    name,
    avatar,
    whatsapp,
    bio,
    subject,
    cost,
    schedule,
  } = request.body;

  const trx = await db.transaction();

  try {
    const [user_id] = await trx('users')
      .insert({ name, avatar, whatsapp, bio })

    const [class_id] = await trx('classes')
      .insert({ subject, cost, user_id })

    const classSchedule = schedule
      .map((item: ScheduleItem) => ({
        class_id,
        week_day: item.week_day,
        from: hourToMinutes(item.from),
        to: hourToMinutes(item.to),
      }));

    await trx('class_schedule')
      .insert(classSchedule);

    await trx.commit();
    return response
      .status(201)
      .send('teste');

  } catch (err) {
    await trx.rollback();
    return response
      .status(400)
      .json({ error: 'Unexpected error while creating new class' })
  }
};