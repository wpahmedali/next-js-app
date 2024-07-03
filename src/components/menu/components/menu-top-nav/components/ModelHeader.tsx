import React, { useEffect } from 'react';

import { XMarkIcon } from '@heroicons/react/24/outline';

const ModelHeader = ({ setModelIsOpen, title }) => {
  const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setModelIsOpen('SET_VALUE', '');
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  return (
    <div className="flex items-center justify-between p-2 md:p-2 border-b rounded-t  bg-primary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        data-slot="icon"
        className="w-6 h-6 text-black"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-black pl-2">
        {title}
      </h3>
      <button
        onClick={() => setModelIsOpen('SET_VALUE', '')}
        type="button"
        className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-900 hover:text-white rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
        data-modal-hide="authentication-modal"
      >
        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        <span className="sr-only">Close modal</span>
      </button>
    </div>
  );
};

export default ModelHeader;
