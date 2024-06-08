import { IInputField } from 'components/customer-review/detail-page/interfaces/input-field.interface';
import React from 'react';

const TextArea = ({
  placeholder,
  name,
  value,
  onChangeHandler,
  error,
}: IInputField): JSX.Element => {
  const classes = `mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 
  invalid:border-pink-500 invalid:text-pink-600
  focus:invalid:border-pink-500 focus:invalid:ring-pink-500`;

  return (
    <label className="block mt-2">
      <span className="block text-sm text-slate-700 font-bold">
        <span className="text-red-500">*</span>Review:
      </span>
      <textarea
        onChange={onChangeHandler}
        value={value}
        name={name}
        placeholder={placeholder}
        autoComplete={name}
        className={classes}
        required
      />
      {error && <p className="text-red-500">{error}</p>}
    </label>
  );
};

export default TextArea;
