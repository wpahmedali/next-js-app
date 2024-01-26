import { SpinnerIcon } from 'icons';
import React from 'react';

const Loading = ({
  height = 'h-11',
  width = 'w-11',
}: {
  height?: string;
  width?: string;
}): JSX.Element => (
  <div>
    <SpinnerIcon className={`${height} ${width} mx-auto animate-spin`} />
  </div>
);

export default Loading;
