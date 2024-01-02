import { SpinnerIcon } from 'icons';
import React from 'react';

const Loading = ({
  height = 'h-10',
  width = 'w-10',
}: {
  height?: string;
  width?: string;
}): JSX.Element => (
  <div>
    <SpinnerIcon
      className={`animation ${height} ${width} mx-auto animate-spin`}
    />
  </div>
);

export default Loading;
