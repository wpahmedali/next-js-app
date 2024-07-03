import * as React from "react";
import { SVGProps } from "react";
export function YoutubeSocialIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      fill="none"
      {...props}
    >
      <path
        fill="#F54A45"
        d="M29 14.5C29 22.506 22.506 29 14.5 29 6.495 29 0 22.506 0 14.5 0 6.495 6.495 0 14.5 0 22.506 0 29 6.495 29 14.5Z"
      />
      <path
        fill="#fff"
        d="M22.427 11.32c0-1.31-1.06-2.37-2.37-2.37H8.942c-1.31 0-2.37 1.06-2.37 2.37v6.36c0 1.31 1.06 2.37 2.37 2.37h11.114c1.31 0 2.37-1.06 2.37-2.37v-6.36Zm-9.51 5.858v-5.972l4.526 2.986-4.526 2.986Z"
      />
    </svg>
  );
}
