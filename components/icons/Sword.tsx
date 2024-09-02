import React from 'react';
import IconProps from './IconProps';

const Sword: React.FunctionComponent<IconProps> = ({x, y, rotate}: IconProps) => {
  return (
    <g transform={`translate(${x},${y}) rotate(${rotate} 15 15)`}>
      <circle cx="15" cy="15" r="14" fill="teal" stroke="black" strokeWidth="1" />
      <path d="
        M 15,3
        l 0,23
      " fill="gold" stroke="gold" strokeWidth="1.5" />
      <path d="
        M 15,3
        l 1.5,2
        v15
        h-3
        v-15
        l 1.5,-2 z
      " fill="lightgray" stroke="black" strokeWidth="1" />
      <path d="
        M 10,20
        h10
      " fill="black" stroke="gold" strokeWidth="1" />
      <circle cx="15" cy="26" r="1.5" strokeWidth="0" fill="firebrick"/>
      <circle cx="10" cy="20" r="1" strokeWidth="0" fill="gold" />
      <circle cx="20" cy="20" r="1" strokeWidth="0" fill="gold" />
    </g>
  )
};

export default Sword;
