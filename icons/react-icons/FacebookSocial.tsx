import * as React from "react";
import { SVGProps } from "react";
export function FacebookSocialIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      fill="none"
      {...props}
    >
      <path
        fill="#2460A1"
        d="M29 14.5C29 22.506 22.506 29 14.5 29 6.495 29 0 22.506 0 14.5 0 6.495 6.495 0 14.5 0 22.506 0 29 6.495 29 14.5Z"
      />
      <path
        fill="#fff"
        d="M17.93 14.507h-2.248v8.006h-3.33v-8.006h-1.583V11.68h1.583V9.846c0-1.31.623-3.358 3.358-3.358l2.463.007v2.742h-1.79c-.293 0-.709.143-.709.774v1.66h2.535l-.28 2.836Z"
      />
    </svg>
  );
}
