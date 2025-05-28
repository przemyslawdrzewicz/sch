import { useMemo } from 'react';
import { decodeCron, encodeCron } from './utils';

function useCronLogic(value, onChange) {
  const cron = useMemo(() => decodeCron(value), [value]);

  function updateMinutes(minutes) {
    onChange(encodeCron({ ...cron, minutes }));
  }

  function updateHours(hours) {
    onChange(encodeCron({ ...cron, hours }));
  }

  function updateDays(days) {
    onChange(encodeCron({ ...cron, days }));
  }

  function updateMonths(months) {
    onChange(encodeCron({ ...cron, months }));
  }

  function updateWeekdays(weekdays) {
    onChange(encodeCron({ ...cron, weekdays }));
  }

  return {
    cron,
    updateMinutes,
    updateHours,
    updateDays,
    updateMonths,
    updateWeekdays,
  };
}

export { useCronLogic };
