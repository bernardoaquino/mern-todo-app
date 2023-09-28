import React, { MouseEventHandler } from 'react';

import * as El from './Button.style';

export type ButtonProps = {
  children?: React.ReactElement | string;
  color?: 'primary' | 'secondary' | 'neutral';
  disabled?: boolean;
  icon?: any;
  onClick?: (MouseEventHandler<HTMLButtonElement> & Function) | undefined;
  rounded?: boolean;
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset' | undefined;
  fullWidth?: boolean;
}

const IconSizeMap = {
  'sm': 16,
  'md': 24,
  'lg': 32
}

const Button = ({
  children,
  color = 'primary',
  disabled = false,
  icon,
  onClick,
  rounded = false,
  size = 'md',
  type = 'button',
  fullWidth = false
}: ButtonProps) => {
  const Icon = icon;

  return (
    <El.Button
      color={color}
      rounded={rounded}
      size={size}
      type={type}
      disabled={disabled}
      onClick={onClick}
      hasChildren={!!children}
      fullWidth={fullWidth}
      data-testid={'Button'}
    >
      <>
        {children}
        {!!icon && (
          <El.Icon data-testid={'Icon'}>
            {typeof icon !== 'object' && <Icon height={IconSizeMap[size]} width={IconSizeMap[size]} />}
          </El.Icon>
        )}
      </>
    </El.Button>
  )
}

export default Button;
