import React from 'react';
import styled from'styled-components';

type Props = React.PropsWithChildren<{
    onClick?: () => void;
    onRightClick?: () => void;
    color?: string;
    image?: string;
    badgeText?: string;
    opaque?: boolean
    type?: "button" | "submit" | "reset" | undefined
}>

const Button: React.FunctionComponent<Props> = ({onClick, onRightClick, badgeText, color='gray', image, opaque=false, type, children}: Props) => {
    const handleClick = (event: React.MouseEvent) => {
        if (onClick) {
            event?.preventDefault();
            event.stopPropagation();
            onClick();
        }
    }
    const handleContextMenu = (event: React.MouseEvent) => {
        if (onRightClick) {
            event.preventDefault();
            event.stopPropagation();
            onRightClick();
        }
    }

    return (
        <StyledButton onClick={handleClick} onContextMenu={handleContextMenu} color={color} $image={image} $opaque={opaque} type={type}>
            {Boolean(badgeText) && <Badge>
                {badgeText}
            </Badge>}
            {children}
        </StyledButton>
    )
}

const StyledButton = styled.button<{color?: string, $image?: string, $opaque: boolean}>`
    background-color: ${({color}) => color};
    background-image: ${({$image}) => $image};
    opacity: ${({$opaque}) => $opaque ? 0.4 : 1};
    color: black;
    position: relative;
    font-size: 13px;
    border: 0;
    margin: 1px;
`

const Badge = styled.div`
    width: 15px;
    height: 15px;
    line-height: 15px;
    text-align: center;
    display: block;
    border-radius: 50%;
    border: 1px solid gray;
    position: absolute;
    top: -7px;
    left: -7px;
    background-color: lightgray;
`

export default Button;