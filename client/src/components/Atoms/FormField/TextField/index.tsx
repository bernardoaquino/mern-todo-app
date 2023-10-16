import React, { ChangeEventHandler, FocusEventHandler, forwardRef } from 'react';

import * as El from './TextField.style';

export type TextFieldProps = {
  type?: string;
  disabled?: boolean;
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
}

export const TextFieldWithRef = forwardRef(({
  type = 'text',
  name,
  label,
  placeholder,
  disabled = false,
  required = false,
  value,
  onChange,
  onBlur,
}: TextFieldProps, ref: any) => {
  return (
    <El.Container>
      <El.Label htmlFor={name}>{label}</El.Label>
      <El.TextField 
        ref={ref}
        type={type} 
        name={name}
        disabled={disabled} 
        required={required} 
        value={value}
        placeholder={placeholder} 
        onChange={(e) => onChange?.(e)} 
        onBlur={onBlur} 
      />
    </El.Container>
  )
})

TextFieldWithRef.displayName = 'TextFieldWithRef'

const TextField = ({
  type = 'text',
  name,
  label,
  placeholder,
  disabled = false,
  required = false,
  value,
  onChange,
  onBlur,
}: TextFieldProps) => {
  return (
    <El.Container>
      <El.Label htmlFor={name}>{label}</El.Label>
      <El.TextField 
        type={type} 
        name={name}
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

export default TextField;