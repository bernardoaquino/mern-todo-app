import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 100%;
  }
`

export const Label = styled.label`
  color: ${(props) => props?.theme?.color?.neutral?.[0]};
  font-size: ${(props) => props?.theme?.typography?.fontSize?.[14]};
  margin-bottom: ${(props) => props?.theme?.grid?.(1)};
`

export const TextField = styled.input`
  background-color: ${(props) => props?.theme?.color?.neutral?.[80]};
  padding: ${(props) => props?.theme?.grid?.(2)};
  border: 1px solid ${(props) => props?.theme?.color?.neutral?.[80]};
  border-radius: 1000vw;
`;