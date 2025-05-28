import React from 'react';
import CronField from './Field/CronField';
import CronPreview from './CronPreview';
import { useCronLogic } from './CronLogic';
import {
  secondOptions,
  minuteOptions,
  hourOptions,
  dayOptions,
  monthOptions,
  weekdayOptions,
  yearOptions,
  secondRange,
  minuteRange,
  hourRange,
  dayRange,
  monthRange,
  weekdayRange,
  yearRange,
} from './presetOptions';

export default function Cron({ value, onChange }) {
  const {
    cron,
    updateSeconds,
    updateMinutes,
    updateHours,
    updateDayOfMonth,
    updateMonth,
    updateDayOfWeek,
    updateYear,
  } = useCronLogic(value, onChange);

  return (
    <>
      <h1>Advanced CRON Generator</h1>
      <CronField
        label="Seconds"
        value={cron.seconds}
        onChange={updateSeconds}
        options={secondOptions}
        range={secondRange}
      />
      <CronField
        label="Minutes"
        value={cron.minutes}
        onChange={updateMinutes}
        options={minuteOptions}
        range={minuteRange}
      />
      <CronField
        label="Hours"
        value={cron.hours}
        onChange={updateHours}
        options={hourOptions}
        range={hourRange}
      />
      <CronField
        label="Day of Month"
        value={cron.dayOfMonth}
        onChange={updateDayOfMonth}
        options={dayOptions}
        range={dayRange}
      />
      <CronField
        label="Month"
        value={cron.month}
        onChange={updateMonth}
        options={monthOptions}
        range={monthRange}
      />
      <CronField
        label="Day of Week"
        value={cron.dayOfWeek}
        onChange={updateDayOfWeek}
        options={weekdayOptions}
        range={weekdayRange}
      />
      <CronField
        label="Year"
        value={cron.year}
        onChange={updateYear}
        options={yearOptions}
        range={yearRange}
      />
      <CronPreview cron={cron} />
    </>
  );
}
