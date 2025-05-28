import { numberRange } from '../utils';
import CronField from './CronField';

const options = [
  { label: 'Every Minute', value: '*' },
  { label: 'Even Minutes', value: '0-59/2' },
  { label: 'Odd Minutes', value: '1-59/2' },
  { label: 'Every 5 Minutes', value: '*/5' },
  { label: 'Every 15 Minutes', value: '*/15' },
  { label: 'Every 30 Minutes', value: '*/30' },
];

const range = numberRange(0, 59);

const CronFieldMinutes = ({ value, onChange }) => {
  return (
    <div className="minutes-container">
      <h2>Minutes</h2>
      <CronField
        options={options}
        range={range}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CronFieldMinutes;
