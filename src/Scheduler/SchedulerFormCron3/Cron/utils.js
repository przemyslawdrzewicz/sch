export const defaultCron = {
  seconds: '0',
  minutes: '*',
  hours: '*',
  dayOfMonth: '?',
  month: '*',
  dayOfWeek: '*',
  year: '*',
};

export const decodeCron = (cron = '') => {
  const parts = cron.trim().split(' ');
  const [
    seconds = '0',
    minutes = '*',
    hours = '*',
    dayOfMonth = '*',
    month = '*',
    dayOfWeek = '?',
    year = '*',
  ] = parts.length === 7 ? parts : ['0', ...parts];
  return { seconds, minutes, hours, dayOfMonth, month, dayOfWeek, year };
};

export const encodeCron = ({
  seconds,
  minutes,
  hours,
  dayOfMonth,
  month,
  dayOfWeek,
  year,
}) => {
  return `${seconds} ${minutes} ${hours} ${dayOfMonth} ${month} ${dayOfWeek} ${year}`.trim();
};

export const numberRange = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

export const parseRangeValue = (data) => data?.value || data;
export const parseRangeLabel = (data) => data?.label || data;
export const separate = (value) => value?.join(',') || '';
