import * as React from "react";
import { SVGProps } from "react";
export function FavouriteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={11}
      height={10}
      fill="none"
      {...props}
    >
      <path
        fill="#fff"
        d="M4.043.753c.386-.401.9-.656 1.52-.736 1.215-.156 2.383.778 2.434 1.949.034.77-.264 1.432-.77 1.991-.585.645-1.221 1.249-1.856 1.85-.433.41-.902.788-1.37 1.193-.449-.388-.909-.758-1.335-1.161-.645-.611-1.291-1.224-1.89-1.875C.312 3.458.013 2.855 0 2.158-.026.589 1.592-.445 3.1.19c.326.137.61.36.943.562Z"
      />
    </svg>
  );
}
