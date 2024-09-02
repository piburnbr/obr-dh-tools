import React from 'react';
import IconProps from './IconProps';

const Skull: React.FunctionComponent<IconProps> = ({x, y, rotate}: IconProps) => {
  return (
    <g transform={`translate(${x},${y}) rotate(${rotate} 15 15)`}>
      <circle cx="15" cy="15" r="14" fill="royalblue" stroke="black" stroke-width="1" ></circle>
      <path d="
        M 11,18
        A 8 7 0 1 1 19,18
        L 19,24
        L 11,24
        L 11,18 Z
      " stroke="#000" stroke-width="1" fill="white" ></path>
      <circle cx="18" cy="12" r="1" fill="black" stroke="black" stroke-width="1" ></circle>
      <circle cx="12" cy="12" r="1" fill="black" stroke="black" stroke-width="1" ></circle>
      <path d="M 15,14 l 1,2 h-2 l 1,-2 Z" fill="black" stroke="#000" stroke-width="1" ></path>
      <path d="
        M 13,19 h.5 v1 h1 v-1 h1 v1 h1 v-1 h.5 v3 h-1.5 v-1 h-1 v1 h-1.5 v-3 Z" fill="black" stroke="black" stroke-width="0" ></path>
    </g>
  )
};

export default Skull;
