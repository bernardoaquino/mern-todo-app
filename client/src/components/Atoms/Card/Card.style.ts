import styled, { css } from 'styled-components';

type CardStyleProps = {
    transparent?: boolean;
    size: 'SM' | 'MD';
    isLink: boolean;
}

const paddingMap = {
    SM: css`
        padding: ${(props) => props?.theme?.grid?.(1.5)} ${(props) => props?.theme?.grid?.(2)};
    `,
    MD: css`
    padding: ${(props) => props?.theme?.grid?.(2)} ${(props) => props?.theme?.grid?.(2.5)};
    `
}

export const Card = styled.div<CardStyleProps>`
    background-color: ${(props) => !props?.transparent && props?.theme?.color?.neutral?.[80] || 'transparent'};
    border-radius: ${(props) => props?.theme?.grid?.(2)};
    cursor: ${(props) => props.isLink && 'pointer'};
    overflow: hidden;

    ${(props) => paddingMap[props.size]};
`