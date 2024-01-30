import React from 'react';
import { IInputField } from '../interfaces/input-field.interface';

const InputField = ({
  placeholder,
  name,
  value,
  onChangeHandler,
}: IInputField): JSX.Element => {
  return (
    <div className="col-span-full">
      <div className="mt-2">
        <input
          onChange={onChangeHandler}
          value={value}
          type="text"
          name={name}
          placeholder={placeholder}
          autoComplete={name}
          className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default InputField;
