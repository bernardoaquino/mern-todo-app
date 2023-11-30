import React, { ChangeEventHandler, FocusEventHandler } from 'react';

import * as El from './Textbox.style';

export type TextboxProps = {
  type?: string;
  disabled?: boolean;
  name?: string;
  label?: string;
  placeholder?: string;
  rows?: number;
  value?: string;
  required?: boolean;
  onChange?: ChangeEventHandler<HTMLTextAreaElement> | undefined;
  onBlur?: FocusEventHandler<HTMLTextAreaElement> | undefined;
}

const Textbox = ({
  type = 'text',
  name,
  label,
  placeholder,
  rows,
  disabled = false,
  required = false,
  value,
  onChange,
  onBlur,
}: TextboxProps) => {
  return (
    <El.Container>
      <El.Label htmlFor={name}>{label}</El.Label>
      <El.Textbox 
        name={name}
        rows={rows} 
        disabled={disabled} 
        required={required} 
        value={value}
        placeholder={placeholder} 
        onChange={(e) => onChange?.(e)} 
        onBlur={onBlur} 
      />
    </El.Container>
  )
}

export default Textbox;