import { useState } from 'react';
import { Radio, RadioGroup } from '@blueprintjs/core';

const SchedulerFormCronField2 = ({
  title,
  options,
  range,
  setValue,
  value,
}) => {
  const [custom, setCustom] = useState(false);

  const handleMultiSelect = (e) => {
    console.log(Array.from(e.target.selectedOptions));
    const selected = Array.from(e.target.selectedOptions).map((o) => o.value);
    setValue(selected.join(','));
  };

  return (
    <div className="field-container" style={{ marginBottom: '1rem' }}>
      <h2>{title}</h2>
      {!custom ? (
        <RadioGroup
          label=""
          selectedValue={value}
          onChange={(e) => {
            if (e.target.value === 'custom') {
              setCustom(true);
            } else {
              setValue(e.target.value);
            }
          }}
        >
          {options.map((opt) => (
            <Radio key={opt.value} label={opt.label} value={opt.value} />
          ))}
          <Radio label="Custom Select" value="custom" />
        </RadioGroup>
      ) : (
        <select multiple value={value.split(',')} onChange={handleMultiSelect}>
          {range.map((v) => (
            <option key={v.value || v} value={v.value || v}>
              {v.label || v}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default SchedulerFormCronField2;
