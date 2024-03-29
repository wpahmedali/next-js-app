import * as React from "react";
import { SVGProps } from "react";
export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      height={21}
      width={21}
      stroke="currentColor"
      {...props}
    >
      <path
      className="hover:fill-yellow-400"
        fill="#fff"
        d="M10.056 0C4.812-.007.568 4.226.549 9.483.53 14.716 4.782 18.988 10.022 19c5.257.012 9.525-4.245 9.526-9.502.002-5.244-4.242-9.49-9.492-9.497Zm2.504 5.715c-.267 0-.528-.026-.782.007-.29.036-.603.072-.852.207-.186.101-.387.35-.406.55-.054.566-.02 1.14-.02 1.757h2c-.11.695-.205 1.342-.325 1.982-.014.072-.177.16-.273.163-.455.017-.912.008-1.416.008v5.232H8.178v-.427c0-1.481-.007-2.964.005-4.445.003-.287-.083-.378-.37-.366-.5.021-1.003.006-1.528.006V8.237H8.15c.01-.177.02-.32.027-.465.032-.652-.012-1.32.11-1.954.257-1.326 1.239-2.031 2.585-1.962.558.029 1.117.054 1.688.082v1.777Z"
      />
    </svg>
  );
}
