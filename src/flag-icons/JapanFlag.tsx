import * as React from 'react';
import { SVGProps } from 'react';

const JapanFlag = (props: SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 55.7 38.9"
      width={22}
      height={17}
      xmlSpace="preserve"
      {...props}
    >
      <path
        fill="#FFF"
        stroke="#CCC"
        strokeWidth={0.2}
        strokeMiterlimit={2.613}
        d="M3.28.25h49.13c1.67 0 3.03 1.36 3.03 3.03v32.33c0 1.67-1.36 3.03-3.03 3.03H3.28a3.04 3.04 0 0 1-3.03-3.03V3.28C.25 1.61 1.61.25 3.28.25z"
      />
      <path
        fill="#BC002D"
        d="M39.37 19.45c0-6.36-5.16-11.52-11.52-11.52-6.36 0-11.52 5.16-11.52 11.52 0 6.36 5.16 11.52 11.52 11.52 6.36 0 11.52-5.16 11.52-11.52z"
      />
    </svg>
  );
};

export default JapanFlag;
