import * as React from "react";
import { SVGProps } from "react";
export function FavIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={13}
      height={12}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.878 1.29A3.658 3.658 0 0 1 9.19.03c1.85-.268 3.627 1.332 3.705 3.34.052 1.32-.402 2.454-1.173 3.414-.889 1.105-1.857 2.14-2.823 3.17-.659.705-1.372 1.351-2.084 2.046-.682-.665-1.382-1.3-2.03-1.991C3.803 8.962 2.82 7.912 1.91 6.795 1.202 5.927.746 4.894.729 3.699.689 1.009 3.15-.763 5.445.327c.494.235.927.618 1.433.964Z"
        fill={props.color}
      />
    </svg>
  );
}
