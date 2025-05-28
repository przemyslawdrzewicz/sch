import { useMemo } from 'react';
import { decodeCron, encodeCron } from './utils';

export function useCronLogic(value, onChange) {
  const cron = useMemo(() => decodeCron(value), [value]);

  const updateField = (field) => (val) => {
    onChange(encodeCron({ ...cron, [field]: val }));
  };

  return {
    cron,
    updateSeconds: updateField('seconds'),
    updateMinutes: updateField('minutes'),
    updateHours: updateField('hours'),
    updateDayOfMonth: updateField('dayOfMonth'),
    updateMonth: updateField('month'),
    updateDayOfWeek: updateField('dayOfWeek'),
    updateYear: updateField('year'),
  };
}
