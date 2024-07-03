import React from 'react';
import { ILoginFormInput } from 'src/interfaces/login-form-input.interface';

const FormInput = ({
  placeholder,
  value,
  type,
  name,
  onChangeHandler,
  error,
}: ILoginFormInput) => {
  return (
    <div className="mt-2">
      <input
        onChange={onChangeHandler}
        type={type}
        name={name}
        value={value}
        id={name}
        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder={placeholder}
        required={false}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default FormInput;
