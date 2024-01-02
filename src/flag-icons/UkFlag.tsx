import * as React from 'react';
import { SVGProps } from 'react';

const UkFlag = (props: SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="uk-min-flag_svg__Layer_1"
      data-name="Layer 1"
      viewBox="0 0 32 21"
      width={22}
      height={17}
      {...props}
    >
      <defs>
        <clipPath id="uk-min-flag_svg__clip-path">
          <path
            d="M0 0h32v21H0z"
            style={{
              fill: "none",
            }}
          />
        </clipPath>
        <style>
          {
            ".uk-min-flag_svg__cls-2{clip-path:url(#uk-min-flag_svg__clip-path)}.uk-min-flag_svg__cls-4{fill:#ce1124}.uk-min-flag_svg__cls-5{fill:#00247d}"
          }
        </style>
      </defs>
      <path
        d="M31.99 20.97H0V0h31.99v20.97z"
        className="uk-min-flag_svg__cls-2"
        style={{
          fill: "#fff",
        }}
      />
      <path
        d="M31.99 8.39H17.91V0h-3.85v8.39H.01v4.19h14.05v8.39h3.85v-8.39h14.08V8.39z"
        className="uk-min-flag_svg__cls-4"
      />
      <g className="uk-min-flag_svg__cls-2">
        <path
          d="M0 2.44v4.57h6.98L0 2.44zM3.85 0h-.1l9.04 5.96V0H3.85z"
          className="uk-min-flag_svg__cls-5"
        />
        <path
          d="M10.74 6.98 0 0v1.64l8.18 5.34h2.56z"
          className="uk-min-flag_svg__cls-4"
        />
      </g>
      <path
        d="M21.26 13.99 32 20.96v-1.64l-8.18-5.33h-2.56z"
        className="uk-min-flag_svg__cls-4"
      />
      <path
        d="M0 18.56v-4.57h6.98L0 18.56zM3.85 21l-.1-.01 9.04-5.95V21H3.85z"
        className="uk-min-flag_svg__cls-5"
      />
      <path
        d="M10.68 13.99.01 20.96H2.5l10.31-6.69v-.28h-2.13z"
        className="uk-min-flag_svg__cls-4"
      />
      <g className="uk-min-flag_svg__cls-2">
        <path
          d="M32 2.44V7h-6.98L32 2.44zM28.15 0h.1L19.2 5.95V0h8.95z"
          className="uk-min-flag_svg__cls-5"
        />
      </g>
      <path
        d="M31.99.01h-2.4L19.21 6.75v.23h2.2L31.99.01z"
        className="uk-min-flag_svg__cls-4"
      />
      <path
        d="M32 18.56v-4.57h-6.98L32 18.56zM28.15 21l.1-.01-9.05-5.95V21h8.95z"
        className="uk-min-flag_svg__cls-5"
      />
    </svg>
  );
};

export default UkFlag;
