import React from 'react';
import IconProps from './IconProps';

const Staff: React.FunctionComponent<IconProps> = ({x, y, rotate}: IconProps) => {
  return (
    <g transform={`translate(${x},${y}) rotate(${rotate} 15 15)`}>
      <circle cx="15" cy="15" r="14" fill="teal" stroke="black" strokeWidth="1" />
      <path d="
        M 15,3
        l -1,7
        l 3,8
        l -2,8
      " fill="none" stroke="saddlebrown" strokeWidth="1.5"/>
      <circle cx="15" cy="4" r="2" fill="lightblue" />
    </g>
  )
};

export default Staff;
