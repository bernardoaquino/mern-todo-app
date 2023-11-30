import styled from 'styled-components';

export const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    padding: ${props => props.theme.grid(10)} ${props => props.theme.grid(2)};
`

export const Container = styled.div`
    background-color: ${props => props.theme.color.neutral[100]};
    padding: ${props => props.theme.grid(4)};
    width: ${props => props.theme.grid(80)};
    max-width: 70vw;
`

export const Title = styled.h1`
    color: ${props => props.theme.color.brand.normal};
    font-size: ${props => props.theme.typography.fontSize[40]};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    text-align: center;
`

export const SubText = styled.p`
    color: ${props => props.theme.color.neutral[0]};
    text-align: center;
    padding: ${props => props.theme.grid(4)} ${props => props.theme.grid(0)};
`