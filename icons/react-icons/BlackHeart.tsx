import * as React from "react";
import { SVGProps } from "react";
export function BlackHeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      fill="none"
      viewBox="0 0 13 12"
      {...props}
    >
      <path
        fill="#AD0000"
        d="M7.062 1.29A3.593 3.593 0 0 1 9.342.03c1.823-.268 3.575 1.332 3.652 3.34.051 1.32-.396 2.454-1.157 3.414-.876 1.105-1.83 2.14-2.783 3.17C8.404 10.66 7.701 11.306 7 12c-.673-.665-1.363-1.3-2.002-1.991-.967-1.047-1.936-2.097-2.834-3.214C1.465 5.927 1.016 4.894 1 3.699.959 1.009 3.386-.763 5.649.327c.488.235.914.618 1.413.964Z"
      />
    </svg>
  );
}
