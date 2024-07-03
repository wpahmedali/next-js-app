import * as React from "react";
import { SVGProps } from "react";
export function GooglePlusSocialIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      fill="none"
      {...props}
    >
      <path
        fill="#EC5D50"
        d="M29 14.5C29 22.506 22.506 29 14.5 29 6.495 29 0 22.506 0 14.5 0 6.495 6.495 0 14.5 0 22.506 0 29 6.495 29 14.5Z"
      />
      <path
        fill="#fff"
        d="M10.963 13.612v2.12h3.508c-.143.91-1.06 2.67-3.508 2.67-2.113 0-3.838-1.754-3.838-3.91 0-2.154 1.725-3.909 3.838-3.909 1.203 0 2.005.516 2.47.953l1.683-1.619C14.035 8.907 12.638 8.3 10.97 8.3a6.191 6.191 0 0 0-6.194 6.194 6.191 6.191 0 0 0 6.194 6.194c3.573 0 5.943-2.514 5.943-6.05a5.3 5.3 0 0 0-.1-1.025h-5.85Zm13.268 0h-1.769v-1.768h-1.768v1.768h-1.769v1.769h1.769v1.768h1.768v-1.768h1.77v-1.769Z"
      />
    </svg>
  );
}
