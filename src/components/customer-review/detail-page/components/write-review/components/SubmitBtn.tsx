import React from 'react';
import { defaultFormData } from '..';

const SubmitBtn = ({ handleSubmit, setOpen, setAllErrors, setFormData }) => {
  return (
    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
      <button
        type="button"
        className="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-primary sm:ml-3 sm:w-auto"
        onClick={handleSubmit}
      >
        Submit
      </button>
      <button
        type="button"
        className="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
        onClick={() => {
          setOpen('');
          setAllErrors(null);
          setFormData(defaultFormData);
        }}
      >
        Close
      </button>
    </div>
  );
};
export default SubmitBtn;
