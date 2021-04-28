import type { Response, Request, NextFunction } from 'express';
import type { ClassesParams } from './repository';
import { createClassesWithUserSchedule, getScheduleClasses } from './service';

export const index = async (
  request: Request<{}, {}, {}, ClassesParams>, response: Response, next: NextFunction,
) => {
  try {
    const scheduleClasses = await getScheduleClasses(request.query);
    return response
      .json(scheduleClasses);
  } catch (error) {
    return next(error);
  }
};

export const create = async (request: Request, response: Response, next: NextFunction) => {
  try {
    const classes = await createClassesWithUserSchedule(request.body);
    return response
      .status(201)
      .send(classes);
  } catch (error) {
    return next(error);
  }
};
