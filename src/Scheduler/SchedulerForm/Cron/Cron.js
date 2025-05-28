import React from 'react';
import CronPreview from './CronPreview';
import CronFieldMinutes from './Field/CronFieldMinutes';
import CronFieldHours from './Field/CronFieldHours';
import CronFieldDays from './Field/CronFieldDays';
import CronFieldMonths from './Field/CronFieldMonths';
import CronFieldWeekdays from './Field/CronFieldWeekdays';
import { useCronLogic } from './CronLogic';

export default function Cron({ value, onChange }) {
  const {
    cron,
    updateMinutes,
    updateHours,
    updateDays,
    updateMonths,
    updateWeekdays,
  } = useCronLogic(value, onChange);

  return (
    <>
      <h1>Human-Friendly CRON Generator</h1>
      <CronFieldMinutes value={cron.minutes} onChange={updateMinutes} />
      <CronFieldHours value={cron.hours} onChange={updateHours} />
      <CronFieldDays value={cron.days} onChange={updateDays} />
      <CronFieldMonths value={cron.months} onChange={updateMonths} />
      <CronFieldWeekdays value={cron.weekdays} onChange={updateWeekdays} />
      <CronPreview cron={cron} />
    </>
  );
}
