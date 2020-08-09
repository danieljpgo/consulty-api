export default function hourToMinutes(time: string) {
  const [hour, minutes] = time
    .split(':')
    .map(Number);

  const timeInMinutes = (hour * 60) + minutes;
  return timeInMinutes;
};