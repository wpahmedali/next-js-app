import React from 'react';
import { IDropdownItem } from './interfaces/dropdown-item.interface';
import Image from 'next/image';

const DropdownItem = ({
  item,
  isYear,
  handleCheck,
  yearType,
}: IDropdownItem) => {
  return (
    <li key={item.id} className="p-2 border-b hover:bg-gray-100">
      <div className="flex items-center pl-2 rounded">
        <input
          id={
            yearType == 'max'
              ? `checkbox-item-max-${item.id + new Date().getTime()}`
              : `checkbox-item-min-${item.id + new Date().getTime()}`
          }
          type={isYear ? 'radio' : 'checkbox'}
          name={`${
            item?.id +
            Date.now() +
            Math.floor(Math.random() * (100 - 0 + 1)) +
            0
          }`}
          checked={item.isChecked}
          value={item.name.replaceAll(' ', '-') + '-' + item.id}
          onChange={handleCheck}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
        />
        {item.image && (
          <Image
            className="flex-none w-5 h-full ml-1"
            src={`/assets/makers/${item.image}.png`}
            alt={''}
            width={30}
            height={30}
          />
        )}
        <label
          htmlFor={
            yearType == 'max'
              ? `checkbox-item-max-${item.id + new Date().getTime()}`
              : `checkbox-item-min-${item.id + new Date().getTime()}`
          }
          className="ml-1 text-thin text-gray-500 cursor-pointer w-full"
        >
          {item.name}
        </label>
      </div>
    </li>
  );
};

export default DropdownItem;
