export const hourToMinutes = (time: string | number) => {
  const [hour, minutes] = time
    .toString()
    .split(':')
    .map(Number);

  const timeInMinutes = (hour * 60) + minutes;
  return timeInMinutes;
};
