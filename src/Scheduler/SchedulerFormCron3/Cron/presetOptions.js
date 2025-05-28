import { numberRange } from './utils';

export const secondOptions = [
  { label: 'Every Second', value: '*' },
  { label: 'Every 5 Seconds', value: '*/5' },
];
export const minuteOptions = [
  { label: 'Every Minute', value: '*' },
  { label: 'Every 5 Minutes', value: '*/5' },
];
export const hourOptions = [
  { label: 'Every Hour', value: '*' },
  { label: 'Every 2 Hours', value: '*/2' },
];
export const dayOptions = [
  { label: 'Every Day', value: '*' },
  { label: 'Last Day', value: 'L' },
  { label: 'Every 5 Days', value: '1/5' },
  { label: 'No Specific Day', value: '?' },
];
export const monthOptions = [{ label: 'Every Month', value: '*' }];
export const weekdayOptions = [
  { label: 'Every Day', value: '*' },
  { label: 'Weekdays', value: 'MON-FRI' },
  { label: 'Last Friday', value: '6L' },
  { label: '3rd Friday', value: '6#3' },
];
export const yearOptions = [
  { label: 'Any Year', value: '*' },
  { label: '2002-2005', value: '2002-2005' },
];

export const secondRange = numberRange(0, 59);
export const minuteRange = numberRange(0, 59);
export const hourRange = numberRange(0, 23);
export const dayRange = numberRange(1, 31).concat([{ label: 'L', value: 'L' }]);
export const monthRange = numberRange(1, 12);
export const weekdayRange = [
  { label: 'Sunday', value: '0' },
  { label: 'Monday', value: '1' },
  { label: 'Tuesday', value: '2' },
  { label: 'Wednesday', value: '3' },
  { label: 'Thursday', value: '4' },
  { label: 'Friday', value: '5' },
  { label: 'Saturday', value: '6' },
];
export const yearRange = numberRange(2020, 2030);
