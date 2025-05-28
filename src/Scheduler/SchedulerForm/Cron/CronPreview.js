const CronPreview = ({ cron }) => {
  return (
    <div>
      <h3>Human-readable Description</h3>
      <p>Minute(s): {cron.minutes}</p>
      <p>Hour(s): {cron.hours}</p>
      <p>Day(s) of Month: {cron.days}</p>
      <p>Month(s): {cron.months}</p>
      <p>Day(s) of Week: {cron.weekdays}</p>
      <p>
        <code>
          CRON:{' '}
          {`${cron.minutes} ${cron.hours} ${cron.days} ${cron.months} ${cron.weekdays}`}
        </code>
      </p>
    </div>
  );
};

export default CronPreview;
