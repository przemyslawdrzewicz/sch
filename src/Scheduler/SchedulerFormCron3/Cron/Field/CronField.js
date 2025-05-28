import { Radio, RadioGroup } from '@blueprintjs/core';

export default function CronField({ label, options, range, value, onChange }) {
  const handleSelect = (e) => {
    const selected = Array.from(e.target.selectedOptions).map((o) => o.value);
    onChange(selected.join(','));
  };

  function handleRadioGroup(e) {
    onChange(e.target.value);
  }

  return (
    <div className="cron-field">
      <h2>{label}</h2>
      <RadioGroup selectedValue={value} onChange={handleRadioGroup}>
        {options.map((opt) => (
          <Radio key={opt.value} label={opt.label} value={opt.value} />
        ))}
      </RadioGroup>
      <select multiple value={value.split(',')} onChange={handleSelect}>
        {range.map((v) => (
          <option key={v.value || v} value={v.value || v}>
            {v.label || v}
          </option>
        ))}
      </select>
    </div>
  );
}
