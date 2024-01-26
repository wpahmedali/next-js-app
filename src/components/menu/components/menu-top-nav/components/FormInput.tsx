import React from 'react';
import { ILoginFormInput } from '../interfaces/login-form-input.interface';

const FormInput = ({
  inputlable,
  placeholder,
  value,
  type,
  name,
  onChangeHandler,
  error,
}: ILoginFormInput) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
        {inputlable}
      </label>
      <input
        onChange={onChangeHandler}
        type={type}
        name={name}
        value={value}
        id={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder || inputlable}
        required={false}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default FormInput;
