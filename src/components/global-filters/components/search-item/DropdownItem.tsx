import React from 'react';
import { IDropdownItem } from './interfaces/dropdown-item.interface';

const DropdownItem = ({
  item,
  isYear,
  handleCheck,
  yearType,
}: IDropdownItem) => {
  return (
    <li key={item.id}>
      <div className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
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
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
        />
        <label
          htmlFor={
            yearType == 'max'
              ? `checkbox-item-max-${item.id + new Date().getTime()}`
              : `checkbox-item-min-${item.id + new Date().getTime()}`
          }
          className="ml-2 text-thin text-gray-500 cursor-pointer"
        >
          {item.name}
        </label>
      </div>
    </li>
  );
};

export default DropdownItem;
