import * as React from "react";
import { SVGProps } from "react";
export function StarRateIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="w-4 h-4 text-gray-300 dark:text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      {...props}
    >
      <path
        fill={props?.color}
        d="m9.429 0 2.116 6.515h6.85l-5.541 4.026 2.117 6.515-5.542-4.026-5.542 4.026 2.116-6.515L.461 6.515h6.85L9.43 0Z"
      />
    </svg>
  );
}
