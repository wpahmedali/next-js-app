import React from 'react';
import { defaultFormData } from '..';
import Loading from 'components/loading';

const SubmitBtn = ({
  mutation,
  handleSubmit,
  setOpen,
  setAllErrors,
  setFormData,
}) => {
  return (
    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
      <button
        type="button"
        className="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black hover:text-primary sm:ml-3 sm:w-auto"
        onClick={handleSubmit}
      >
        <span className="pr-2">
          {mutation.isLoading && <Loading height="h-6" width="w-6" />}
        </span>
        Submit
      </button>
      <button
        type="button"
        className="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
        onClick={() => {
          setOpen('SET_VALUE', '');
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
