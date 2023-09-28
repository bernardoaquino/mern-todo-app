import React, { useEffect, useRef } from 'react';

/** Assets */
import Check from 'assets/check.svg';

/** Styles */
import * as El from './Checkbox.style';

export type CheckboxProps = {
  key?: string;
  name?: string;
  label: string;
  value?: boolean;
  required?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox = ({
  key,
  name,
  label,
  value = false,
  required,
  onChange
}: CheckboxProps) => {
  const checked = useRef<boolean>(value);

  useEffect(() => {
    if (value) {
      checked.current = value;
    }
  }, [value])

  const handleChange = () => {
    const newValue = !checked

    checked.current = newValue;
    onChange?.(newValue);
  }

  return (
    <El.Container key={key} data-testid={'Checkbox'}>
      <El.Checkbox data-testid={'Checkbox-container'} checked={checked.current} onClick={() => handleChange()}>
        <El.CheckboxInput data-testid={'Checkbox-input'} type={'checkbox'} name={name} required={required} checked={checked.current} readOnly />
        {checked && typeof Check !== 'object' && <Check height={16} width={16} />}
      </El.Checkbox>
      <El.Label data-testid={'Checkbox-label'} onClick={() => handleChange()}>{label}</El.Label>
    </El.Container>
  )
}

export default Checkbox;