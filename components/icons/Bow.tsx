import React from 'react';
import IconProps from './IconProps';

const Bow: React.FunctionComponent<IconProps> = ({x, y, rotate}: IconProps) => {
  return (
    <g transform={`translate(${x},${y}) rotate(${rotate} 15 15)`}>
      <circle cx="15" cy="15" r="14" fill="teal" stroke="black" strokeWidth="1" />
      <path d="
        M 15, 3.5
        l 0, 23
      " fill="none" stroke="black" strokeWidth="1" />
      <path d="
        M 15,3.5
        c 10 5, 10 18, 0 23
      " fill="none" stroke="brown" strokeWidth="2"/>
    </g>
  )
};

export default Bow;
