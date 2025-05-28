import { Radio, RadioGroup } from '@blueprintjs/core';
import { parseRangeLabel, parseRangeValue, separate } from '../utils';

function CronField({ options, range, value, onChange }) {
  const handleSelect = (e) => {
    const selected = Array.from(e.target.selectedOptions).map((o) => o.value);
    onChange(separate(selected));
  };

  function handleRadioGroup(e) {
    onChange(e.target.value);
  }

  return (
    <>
      <RadioGroup selectedValue={value} onChange={handleRadioGroup}>
        {options.map((opt) => (
          <Radio key={opt.value} label={opt.label} value={opt.value} />
        ))}
      </RadioGroup>
      <select multiple value={value} onChange={handleSelect}>
        {range.map((v) => (
          <option key={parseRangeValue(v)} value={parseRangeValue(v)}>
            {parseRangeLabel(v)}
          </option>
        ))}
      </select>
    </>
  );
}

export default CronField;
