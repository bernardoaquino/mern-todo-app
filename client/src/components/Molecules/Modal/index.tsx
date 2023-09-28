import { MouseEvent, useEffect, useRef, useState } from "react";

/** Assets */
import XCircleIcon from '~/assets/x-circle.svg?react';

/** Style */
import * as El from './Modal.style';

type ModalProps = {
    width?: number;
    open?: boolean;
    onClose?: Function;
    title?: string;
    content?: any;
}

const Modal = ({
    width = 400,
    open = false,
    onClose,
    title,
    content
}: ModalProps) => {
    const [isOpened, setIsOpened] = useState(open);
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsOpened(open);
    }, [open])

    const handleCloseModal = () => {
        setIsOpened(false);
        onClose?.();
    }

    const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
        if (overlayRef?.current && !(e.target as Element).closest(overlayRef?.current?.className)) {
            handleCloseModal();
        }
    }

    if (!isOpened) return null

    return (
        <El.Overlay ref={overlayRef} onClick={handleOverlayClick} data-testid={'Modal-overlay'}>
            <El.Modal onClick={(e) => e.stopPropagation()} width={width} data-testid={'Modal'}>
                <El.ModalHeader noTitle={!title?.length}>
                    {!!title?.length && <El.ModalTitle>{title}</El.ModalTitle>}
                    {typeof XCircleIcon !== 'object' ? <XCircleIcon onClick={handleCloseModal} height={16} width={16} /> : <div data-testid={'Modal-close'} onClick={handleCloseModal}>&#10005;</div>}
                </El.ModalHeader>
                <El.ModalContent>
                    {content}
                </El.ModalContent>
            </El.Modal>
        </El.Overlay>
    )
}

export default Modal