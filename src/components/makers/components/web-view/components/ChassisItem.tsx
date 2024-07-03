import React from 'react';
import Link from 'next/link';
import { IMakerModelChassisItem } from 'src/interfaces/marker-model.interface';

const ChassisItem = ({
  url,
  item,
  handleChassisClick,
}: {
  url: string;
  item: IMakerModelChassisItem;
  handleChassisClick: () => void;
}): JSX.Element => {
  return (
    <li>
      <Link
        href={url}
        onClick={handleChassisClick}
        className="px-4 py-2 hover:bg-white hover:text-black border-b border-gray-200 justify-between flex"
      >
        <span>{item.chassisCodeName.toUpperCase()}</span>
        <span className="ml-auto">{item.chassisCodeCount}</span>
      </Link>
    </li>
  );
};

export default ChassisItem;
