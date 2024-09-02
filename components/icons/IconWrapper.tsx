import React from 'react';
import { Bow, Shield, Skull, Staff, Sword } from './index';

type Props = {
    x: Number,
    y: Number,
    rotate: Number,
    icon: string,
}

const IconWrapper: React.FunctionComponent<Props> = ({x, y, rotate, icon}: Props) => {
  switch (icon) {
    case "Bow":
        return (<Bow x={x} y={y} rotate={rotate} />);
    case "Shield":
        return (<Shield x={x} y={y} rotate={rotate} />);
    case "Sword":
        return (<Sword x={x} y={y} rotate={rotate} />);
    case "Staff":
        return (<Staff x={x} y={y} rotate={rotate} />);
    case "Skull":
        default:
        return (<Skull x={x} y={y} rotate={rotate} />);
  }
};

export default IconWrapper;
