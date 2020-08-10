import { Response, Request } from 'express';
import db from '../../database/connection';
import hourToMinutes from '../../utils/hourToMinutes';

interface ScheduleItem {
  week_day: number,
  from: string,
  to: string,
}

export const index = async (request: Request, response: Response) => {
  const { week_day, subject, time } = request.query;

  if (!week_day || !subject || !time) {
    return response
      .status(400)
      .json({ error: 'Missing required filters.' })
  }

  const timeInMinutes = hourToMinutes(time as string)

  const classes = await db('classes')
    .whereExists(function () {
      this.select('class_schedule.*')
        .from('class_schedule')
        .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
        .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
        .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
        .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
    })
    .where('classes.subject', '=', subject as string)
    .join('users', 'classes.user_id', '=', 'users.id')
    .select(['classes.*', 'users.*']); // inner join

  return response
    .json(classes);
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

    const [id] = await trx('class_schedule')
      .insert(classSchedule);

    await trx.commit();

    return response
      .status(201)
      .send({ id });

  } catch (err) {
    await trx.rollback();
    return response
      .status(400)
      .json({ error: 'Unexpected error while creating new class.' })
  }
};