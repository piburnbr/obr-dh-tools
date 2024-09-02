import React from 'react';
import IconProps from './IconProps';

const Shield: React.FunctionComponent<IconProps> = ({x, y, rotate}: IconProps) => {
  return (
    <g transform={`translate(${x},${y}) rotate(${rotate} 15 15)`}>
      <circle cx="15" cy="15" r="14" fill="teal" stroke="black" strokeWidth="1" />
      <path d="
        M 15,7
        h 7
        v 14
        l -7,5
        l -7,-5
        v -14
        z
      " fill="lightgray" stroke="black" strokeWidth="1" />
      <path d="M 15,7 v 19" stroke="black" strokeWidth="1"/>
    </g>
  )
};

export default Shield;
