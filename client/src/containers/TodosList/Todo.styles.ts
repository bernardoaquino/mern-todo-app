import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${props => props.theme.grid(4)};
    border: 1px solid ${props => props.theme.color.neutral[60]};
`

export const Text = styled.p`
    color: ${props => props.theme.color.neutral[0]};
`

export const Actions = styled.div`
    display: flex;
    gap: ${props => props.theme.grid(2)};
`