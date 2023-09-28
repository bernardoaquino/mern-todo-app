import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > :not(:first-child) {
    margin-top: ${(props) => props?.theme?.grid?.(2)};
  }
`

export const Wrapper = styled.div``

export const Form = styled.form``

export const SectionTitle = styled.p`
  font-size: ${(props) => props?.theme?.typography?.fontSize?.[16]};
  font-weight: ${(props) => props?.theme?.typography?.fontWeight?.extraBold};
  padding: ${(props) => props?.theme?.grid?.(5)} ${(props) => props?.theme?.grid?.(0)} ${(props) => props?.theme?.grid?.(2)};
`

interface IFieldColumns {
  amount: number
}

export const FieldColumns = styled.div<IFieldColumns>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.amount}, 1fr)`};
  grid-gap: ${(props) => props.theme.grid(2)};
  align-items: flex-end;

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    display: flex;
    flex-direction: column;
    grid-gap: unset;
  }
`

export const Button = styled.div``