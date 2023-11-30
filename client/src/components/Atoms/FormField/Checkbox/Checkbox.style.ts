import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`

type ICheckbox = {
  checked: boolean;
}

export const Checkbox = styled.div<ICheckbox>`
  align-items: center;
  background-color: ${(props) => props.checked ? props?.theme?.color?.brand?.light : props?.theme?.color?.neutral?.[40]};
  border-radius: ${(props) => props?.theme?.grid?.(.5)};
  display: flex;
  height: ${(props) => props?.theme?.grid?.(2.5)};
  justify-content: center;
  width: ${(props) => props?.theme?.grid?.(2.5)};
  position: relative;
`

export const CheckboxInput = styled.input`
  display: none;
  left: 0;
  position: absolute;
  top: 0;
  visibility: hidden;
`

export const Label = styled.label`
  color: ${(props) => props?.theme?.color?.neutral?.[0]};
  font-size: ${(props) => props?.theme?.typography?.fontSize?.[14]};
  margin-bottom: ${(props) => props?.theme?.grid?.(1)};
  margin-left: ${(props) => props?.theme?.grid?.(.5)};
`