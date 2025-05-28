import { numberRange } from '../utils';
import CronField from './CronField';

const options = [
  { label: 'Every Hour', value: '*' },
  { label: 'Even Hours', value: '0-23/2' },
  { label: 'Odd Hours', value: '1-23/2' },
  { label: 'Every 6 Hours', value: '*/6' },
  { label: 'Every 12 Hours', value: '*/12' },
];

const range = numberRange(0, 23);

const CronFieldHours = ({ value, onChange }) => {
  return (
    <div className="hours-container">
      <h2>Hours</h2>
      <CronField
        name="hours"
        options={options}
        range={range}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CronFieldHours;
