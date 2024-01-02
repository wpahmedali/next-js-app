import * as React from "react";
import { SVGProps } from "react";
export function UaeFlagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      width={32}
      height={21}
      {...props}
    >
      <path
        d="M32 21.22H0V-.22h32v21.44z"
        style={{
          fill: "#fff",
        }}
      />
      <path
        d="M0 6.9h32V-.22H0V6.9z"
        style={{
          fill: "#0e9f4a",
        }}
      />
      <path
        d="M0 21.22h32V14.1H0v7.12z"
        style={{
          fill: "#050608",
        }}
      />
      <path
        d="M7.97 21.22H0V-.22h7.97v21.44z"
        style={{
          fill: "#d0202c",
        }}
      />
    </svg>
  );
}
