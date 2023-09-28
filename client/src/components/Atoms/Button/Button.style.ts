import styled, { css } from 'styled-components';

import { ButtonProps } from './';

const DisabledStyling = css`
  background-color: ${(props) => props?.theme?.color?.neutral?.[75]};
`

const ColorStyling = {
  'primary': css`
    color: ${(props) => props?.theme?.color?.neutral?.[100]};
    background-color: ${(props) => props?.theme?.color?.brand?.pure};
  `,
  'secondary': css`
    color: ${(props) => props?.theme?.color?.neutral?.[100]};
    background-color: ${(props) => props?.theme?.color?.brand?.normal};
  `,
  'neutral': css`
    color: ${(props) => props?.theme?.color?.neutral?.[100]};
    background-color: ${(props) => props?.theme?.color?.neutral?.[80]};
  `
}

const SizeStyling = {
  'sm': css<ButtonStyling>`
    font-size: ${(props) => props?.theme?.typography?.fontSize?.[12]};
    padding: ${(props) => props?.theme?.grid?.(1)};

    > svg {
      margin-left: ${(props) => props.hasChildren && props?.theme?.grid?.(1)};
    }
  `,
  'md': css<ButtonStyling>`
    font-size: ${(props) => props?.theme?.typography?.fontSize?.[14]};
    padding: ${(props) => props?.theme?.grid?.(1.5)};

    > svg {
      margin-left: ${(props) => props.hasChildren && props?.theme?.grid?.(2)};
    }
  `,
  'lg': css<ButtonStyling>`
    font-size: ${(props) => props?.theme?.typography?.fontSize?.[16]};
    padding: ${(props) => props?.theme?.grid?.(2)};

    > svg {
      margin-left: ${(props) => props.hasChildren && props?.theme?.grid?.(2)};
    }
  `,
}

type ButtonStyling = ButtonProps & {
  color: string;
  hasChildren: boolean;
  fullWidth: boolean;
}

export const Button = styled.button<ButtonStyling>`
  outline: none;
  border: none;
  border-radius: ${(props) => props.rounded ? '100vw' : props?.theme?.grid?.(1)};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${(props) => props?.theme?.typography?.fontWeight?.bold};
  width: ${(props) => props.fullWidth && '100%'};

  ${(props) => props.size && SizeStyling[props.size]};
  ${(props) => ColorStyling[props.color]};
  ${(props) => props.disabled && DisabledStyling};
`

export const Icon = styled.div``