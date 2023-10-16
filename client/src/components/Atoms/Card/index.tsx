import { ReactNode } from "react";

/** Style */
import * as El from './Card.style';

type CardProps = {
    transparent?: boolean;
    onClick?: Function;
    size?: 'SM' | 'MD';
    children: ReactNode;
};

const Card = ({
    transparent,
    onClick,
    size = 'SM',
    children
}: CardProps) => (
    <El.Card 
        onClick={() => onClick?.()} 
        isLink={typeof onClick === 'function'} 
        size={size}
        transparent={transparent}
        data-testid={'Card'}
    >
        {children}
    </El.Card>
);

export default Card;