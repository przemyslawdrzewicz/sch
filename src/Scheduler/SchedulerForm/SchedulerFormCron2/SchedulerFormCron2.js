import React, { useState } from 'react';
import SchedulerFormCronPreview2 from './SchedulerFormCronPreview2';
import SchedulerFormCronField2 from './SchedulerFormCronField2';

const options = {
  minutes: [
    { label: 'Every Minute', value: '*' },
    { label: 'Even Minutes', value: '0-59/2' },
    { label: 'Odd Minutes', value: '1-59/2' },
    { label: 'Every 5 Minutes', value: '*/5' },
    { label: 'Every 15 Minutes', value: '*/15' },
    { label: 'Every 30 Minutes', value: '*/30' },
  ],
  hours: [
    { label: 'Every Hour', value: '*' },
    { label: 'Even Hours', value: '0-23/2' },
    { label: 'Odd Hours', value: '1-23/2' },
    { label: 'Every 6 Hours', value: '*/6' },
    { label: 'Every 12 Hours', value: '*/12' },
  ],
  days: [
    { label: 'Every Day', value: '*' },
    { label: 'Even Days', value: '2-30/2' },
    { label: 'Odd Days', value: '1-31/2' },
    { label: 'Every 5 Days', value: '*/5' },
    { label: 'Every 10 Days', value: '*/10' },
    { label: 'Every Half Month', value: '1,15' },
  ],
  months: [
    { label: 'Every Month', value: '*' },
    { label: 'Even Months', value: '2,4,6,8,10,12' },
    { label: 'Odd Months', value: '1,3,5,7,9,11' },
    { label: 'Every 4 Months', value: '1,5,9' },
    { label: 'Every Half Year', value: '1,7' },
  ],
  weekDays: [
    { label: 'Every Day', value: '*' },
    { label: 'Monday - Friday', value: '1-5' },
    { label: 'Saturday - Sunday', value: '0,6' },
  ],
};

const numberRange = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

export default function SchedulerFormCron2() {
  const [cron, setCron] = useState({
    minutes: '*',
    hours: '*',
    days: '*',
    months: '*',
    weekdays: '*',
  });

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>Human-Friendly CRON Generator</h1>

      <SchedulerFormCronField2
        title="Minutes"
        options={options.minutes}
        range={numberRange(0, 59)}
        value={cron.minutes}
        setValue={(val) => setCron({ ...cron, minutes: val })}
      />

      <SchedulerFormCronField2
        title="Hours"
        options={options.hours}
        range={numberRange(0, 23)}
        value={cron.hours}
        setValue={(val) => setCron({ ...cron, hours: val })}
      />

      <SchedulerFormCronField2
        title="Days of Month"
        options={options.days}
        range={numberRange(1, 31)}
        value={cron.days}
        setValue={(val) => setCron({ ...cron, days: val })}
      />

      <SchedulerFormCronField2
        title="Months"
        options={options.months}
        range={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']}
        value={cron.months}
        setValue={(val) => setCron({ ...cron, months: val })}
      />

      <SchedulerFormCronField2
        title="Days of Week"
        options={options.weekDays}
        range={[
          { value: '0', label: 'Sunday' },
          { value: '1', label: 'Monday' },
          { value: '2', label: 'Tuesday' },
          { value: '3', label: 'Wednesday' },
          { value: '4', label: 'Thursday' },
          { value: '5', label: 'Friday' },
          { value: '6', label: 'Saturday' },
        ]}
        value={cron.weekdays}
        setValue={(val) => setCron({ ...cron, weekdays: val })}
      />

      <SchedulerFormCronPreview2 cron={cron} />
    </div>
  );
}
