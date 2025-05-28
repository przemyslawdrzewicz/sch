import { numberRange } from '../utils';
import CronField from './CronField';

const options = [
  { label: 'Every Month', value: '*' },
  { label: 'Even Months', value: '2,4,6,8,10,12' },
  { label: 'Odd Months', value: '1,3,5,7,9,11' },
  { label: 'Every 4 Months', value: '1,5,9' },
  { label: 'Every Half Year', value: '1,7' },
];

const range = numberRange(1, 12);

const CronFieldMonths = ({ value, onChange }) => {
  return (
    <div className="months-container">
      <h2>Months</h2>
      <CronField
        name="months"
        options={options}
        range={range}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CronFieldMonths;
