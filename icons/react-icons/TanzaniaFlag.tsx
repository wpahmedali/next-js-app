import * as React from "react";
import { SVGProps } from "react";
export function TanzaniaFlagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      width={32}
      height={21}
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
}
