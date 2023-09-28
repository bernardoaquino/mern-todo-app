import styled from 'styled-components';

export const Overlay = styled.div`
    background-color: rgba(0,0,0,0.4);
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
`

type IModal = {
    width: number;
}

export const Modal = styled.div<IModal>`
    background-color: ${(props) => props?.theme?.color?.neutral?.[100]};
    border-radius: ${(props) => props?.theme?.grid?.(1)};
    padding: ${(props) => props?.theme?.grid?.(4)};
    max-width: 90vw;
    width: ${(props) => `${props.width}px`};
`

interface IModalHeader {
    noTitle?: boolean;
}

export const ModalHeader = styled.div<IModalHeader>`
    display: flex;
    justify-content: ${(props) => props.noTitle ? 'flex-end' : 'space-between'};

    > svg {
        cursor: pointer;
    }
`

export const ModalTitle = styled.p`
    color: ${(props) => props?.theme?.color?.brand?.pure};
    font-size: ${(props) => props?.theme?.typography?.fontSize?.[16]};
`

export const ModalContent = styled.div`
    margin-top: ${(props) => props?.theme?.grid?.(5)};
`