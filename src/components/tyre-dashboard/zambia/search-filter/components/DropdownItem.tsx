import React from 'react';
import { IDropdownItem } from '../interfaces/dropdown-item.interface';

const DropdownItem = ({ isChecked, id, name, handleCheck }: IDropdownItem) => {
  return (
    <li className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
      <input
        id={`checkbox-item${id}`}
        type="radio"
        name="size"
        checked={isChecked}
        value={id}
        onChange={handleCheck}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
      />
      <label
        htmlFor={`checkbox-item${id}`}
        className="ml-2 text-thin text-gray-500 cursor-pointer"
      >
        {name}
      </label>
    </li>
  );
};

export default DropdownItem;
