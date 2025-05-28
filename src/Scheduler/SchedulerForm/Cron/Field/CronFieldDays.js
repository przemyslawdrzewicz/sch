import { numberRange } from '../utils';
import CronField from './CronField';

const options = [
  { label: 'Every Day', value: '*' },
  { label: 'Even Days', value: '2-30/2' },
  { label: 'Odd Days', value: '1-31/2' },
  { label: 'Every 5 Days', value: '*/5' },
  { label: 'Every 10 Days', value: '*/10' },
  { label: 'Every Half Month', value: '1,15' },
];

const range = numberRange(1, 31);

const CronFieldDays = ({ value, onChange }) => {
  return (
    <div className="days-container">
      <h2>Days</h2>
      <CronField
        name="days"
        options={options}
        range={range}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CronFieldDays;
