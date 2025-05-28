export const numberRange = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

export const encodeCron = (cron) => {
  return `${cron.minutes} ${cron.hours} ${cron.days} ${cron.months} ${cron.weekdays}`;
};

export const decodeCron = (cron = '') => {
  if (!cron)
    return { minutes: '*', hours: '*', days: '*', months: '*', weekdays: '*' };
  const [minutes, hours, days, months, weekdays] = cron.split(' ');
  return { minutes, hours, days, months, weekdays };
};

export const separate = (value) => value?.join(',') || '';
export const parseRangeValue = (data) => data?.value || data;
export const parseRangeLabel = (data) => data?.label || data;
