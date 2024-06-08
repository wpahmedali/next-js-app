import * as React from 'react';
import { SVGProps } from 'react';

const ThailandFlag = (props: SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={17}
      viewBox="0 0 55.68 38.88"
      xmlSpace="preserve"
      {...props}
    >
      <path
        fill="#A51931"
        d="M3.27.24H52.4c1.67 0 3.03 1.36 3.03 3.03V35.6a3.04 3.04 0 0 1-3.03 3.03H3.27A3.04 3.04 0 0 1 .24 35.6V3.27C.24 1.6 1.6.24 3.27.24z"
      />
      <path fill="#F4F5F8" d="M.24 5.59h55.2v27.7H.24V5.59z" />
      <path fill="#2D2A4A" d="M.24 12.52h55.2v13.84H.24V12.52z" />
      <path
        fill="none"
        stroke="#CCC"
        strokeWidth={0.48}
        strokeMiterlimit={22.926}
        d="M3.27.24H52.4c1.67 0 3.03 1.36 3.03 3.03V35.6a3.04 3.04 0 0 1-3.03 3.03H3.27A3.04 3.04 0 0 1 .24 35.6V3.27C.24 1.6 1.6.24 3.27.24z"
      />
    </svg>
  );
};

export default ThailandFlag;
