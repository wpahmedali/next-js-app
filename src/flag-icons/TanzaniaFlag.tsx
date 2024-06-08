import * as React from 'react';
import { SVGProps } from 'react';

const TanzaniaFlag = (props: SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 32 21"
      width={22}
      height={17}
      {...props}
    >
      <path
        d="M0 21.17V-.17h32L0 21.17z"
        style={{
          fill: "#1eb53a",
        }}
      />
      <path
        d="M0 21.17h32V-.17L0 21.17z"
        style={{
          fill: "#00a3dd",
        }}
      />
      <path
        d="M24.42-.17 0 15.94v5.23h7.58L32 5.06V-.17h-7.58z"
        style={{
          fill: "#fcd116",
        }}
      />
      <path d="M27.01-.17 0 17.64v3.53h4.99L32 3.35V-.17h-4.99z" />
    </svg>
  );
};

export default TanzaniaFlag;
