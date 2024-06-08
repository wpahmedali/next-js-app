import { XMarkIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { useEffect } from 'react';

const ModelHeader = ({
  setIsOpenImage,
  makerName,
  modelName,
  registrationYear,
}): JSX.Element => {
  const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpenImage(false);
    }
  };

  //const [Escape, setEscape] = useState("")

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  return (
    <div className="flex lex items-center justify-between py-0 md:py-0 border-b rounded-t dark:border-gray-600">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        {makerName} {modelName} - {registrationYear}
      </h3>
      <button
        onClick={() => setIsOpenImage(false)}
        type="button"
        className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
        data-modal-hide="authentication-modal"
      >
        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        <span className="sr-only">Close modal</span>
      </button>
    </div>
  );
};
export default ModelHeader;
