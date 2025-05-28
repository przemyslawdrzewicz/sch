import CronField from './CronField';

const options = [
  { label: 'Every Day', value: '*' },
  { label: 'Monday - Friday', value: '1-5' },
  { label: 'Saturday - Sunday', value: '0,6' },
];

const range = [
  { value: '0', label: 'Sunday' },
  { value: '1', label: 'Monday' },
  { value: '2', label: 'Tuesday' },
  { value: '3', label: 'Wednesday' },
  { value: '4', label: 'Thursday' },
  { value: '5', label: 'Friday' },
  { value: '6', label: 'Saturday' },
];

const CronFieldWeekdays = ({ value, onChange }) => {
  return (
    <div className="months-container">
      <h2>Weekdays</h2>
      <CronField
        name="weekdays"
        options={options}
        range={range}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CronFieldWeekdays;
