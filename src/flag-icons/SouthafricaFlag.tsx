import * as React from 'react';
import { SVGProps } from 'react';

const SouthAfricaFlag = (props: SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      width={22}
      height={17}
      {...props}
    >
      <defs>
        <clipPath id="south-africa-flag_svg__a">
          <path
            d="M0 0h32v21H0z"
            style={{
              fill: 'none',
            }}
          />
        </clipPath>
      </defs>
      <g
        style={{
          clipPath: 'url(#south-africa-flag_svg__a)',
        }}
      >
        <path
          d="M31.98 20.93H0V0h31.98v20.93z"
          style={{
            fill: '#fff',
          }}
        />
      </g>
      <path
        d="M4.87.03H32v6.99H14.77L4.87.03z"
        style={{
          fill: '#de3831',
        }}
      />
      <path
        d="M4.87 21H32v-7H14.77l-9.9 7z"
        style={{
          fill: '#002395',
        }}
      />
      <path
        d="M32 8.39H14.44L2.94.01H.05v20.98h2.87l11.52-8.37H32V8.39z"
        style={{
          fill: '#007a4d',
        }}
      />
      <path
        d="M11.09 10.55.04 18.48V2.5l11.05 8.05z"
        style={{
          fill: '#ffb612',
        }}
      />
      <path d="M9.17 10.53.03 16.8V4.16l9.14 6.37z" />
    </svg>
  );
};

export default SouthAfricaFlag;
