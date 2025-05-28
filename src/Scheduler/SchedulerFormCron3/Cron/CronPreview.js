const CronPreview = ({ cron }) => {
  return (
    <div>
      <h3>Generated CRON Expression</h3>
      <code>
        {`${cron.seconds} ${cron.minutes} ${cron.hours} ${cron.dayOfMonth} ${cron.month} ${cron.dayOfWeek} ${cron.year}`}
      </code>
    </div>
  );
};

export default CronPreview;
