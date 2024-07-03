import * as React from 'react';
import { SVGProps } from 'react';

const AusFlag = (props: SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 32 22"
    width="1em"
    height="1em"
    {...props}
  >
    <defs>
      <clipPath id="clip-path">
        <path d="M-.44-.01h32.85v17.33H-.44z" className="cls-1" />
      </clipPath>
      <style>
        {
          ".cls-1{fill:none}.cls-2{fill:#00247d}.cls-3{fill:#fff}.cls-4{fill:#ce1124}"
        }
      </style>
    </defs>
    <title>{"Australia flag"}</title>
    <path d="M-.43 22.4h32.84V-.4H-.43v22.8z" className="cls-2" />
    <path d="M16.06 8.8H-.44V-.01h16.5V8.8z" className="cls-3" />
    <path
      d="M16.06 3.51H8.8V-.01H6.81v3.52H-.43v1.77h7.24V8.8H8.8V5.28h7.26V3.51z"
      className="cls-4"
    />
    <path
      d="M-.44 1.01v1.92h3.6l-3.6-1.92zM1.55-.01H1.5l4.66 2.5v-2.5H1.55z"
      className="cls-2"
    />
    <path d="M5.1 2.92-.44-.01v.69l4.22 2.24H5.1z" className="cls-4" />
    <path d="M-.44-.01h32.85v17.33H-.44z" className="cls-1" />
    <path d="m10.53 5.87 5.53 2.93v-.69l-4.21-2.24h-1.32z" className="cls-4" />
    <path
      d="M-.44 7.79V5.87h3.6l-3.6 1.92zM1.55 8.82l-.05-.01 4.66-2.5v2.51H1.55z"
      className="cls-2"
    />
    <path d="M5.07 5.87-.43 8.8H.85l5.32-2.81v-.12h-1.1z" className="cls-4" />
    <g
      style={{
        clipPath: "url(#clip-path)",
      }}
    >
      <path
        d="M16.06 1.01v1.92h-3.6l3.6-1.92zM14.08-.01h.05l-4.67 2.5v-2.5h4.62z"
        className="cls-2"
      />
    </g>
    <path d="M16.06-.01h-1.24L9.47 2.82v.1h1.13l5.46-2.93z" className="cls-4" />
    <path
      d="M16.06 7.79V5.87h-3.6l3.6 1.92zM14.08 8.82l.05-.01-4.67-2.5v2.51h4.62z"
      className="cls-2"
    />
    <path
      d="m7.77 13.62-.48 1.57-1.49-.62.87 1.42-1.35.88 1.58.1-.23 1.71 1.11-1.25 1.09 1.27-.21-1.72 1.55-.14-1.34-.85.88-1.4-1.47.6-.51-1.57zM20.1 6.37l-.22.72-.69-.28.4.65-.62.41.73.05-.11.79.51-.58.51.59-.1-.8.72-.06-.62-.4.4-.64-.68.28-.23-.73zM24.23 1.68l-.22.73-.69-.29.41.66-.63.4.73.05-.1.79.51-.58.51.59-.1-.8.71-.06-.61-.39.4-.65-.68.28-.24-.73zM27.85 5.21l-.22.73-.69-.29.41.66-.63.4.73.05-.1.79.51-.58.5.59-.1-.8.72-.06-.62-.39.41-.65-.68.28-.24-.73zM24.23 14.37l-.22.72-.69-.28.41.65-.63.41.73.04-.1.79.51-.57.51.58-.1-.79.71-.06-.61-.4.4-.65-.68.28-.24-.72zM25.9 8.44l.19.61h.6l-.49.37.19.61-.49-.38-.48.38.18-.61-.49-.37h.61l.18-.61z"
      className="cls-3"
    />
  </svg>
  );
};

export default AusFlag;
