import { Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ICloseIcon } from 'components/right-menu/components/country-dialog/interfaces/close-icon.interface';
import React, { Fragment } from 'react';

const CloseIconCountry = ({
  hideDialog,
  setAllErrors,
  setFormData,
}: ICloseIcon): JSX.Element => (
  <Transition.Child
    as={Fragment}
    enter="ease-in-out duration-500"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="ease-in-out duration-500"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <div className="absolute left-0 3xl:top-36 3xl:left-6 2xl:-ml-8 xl:top-32 xl:left-5 lg:top-32 lg:-left-4 md:-left-0 md:top-2 sm:top-2 sm:left-1 xs:top-2 xxs:left-1 xxs:top-2 xs:left-1 flex xs:-ml-0 xs:-mt-1 xxs:-ml-0 xxs:-mt-1 xl:-ml-6 bg-black rounded-lg">
      <button
        type="button"
        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
        onClick={() => {
          hideDialog('');
          setAllErrors && setAllErrors(null);
        }}
      >
        <span className="sr-only">Close panel</span>
        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  </Transition.Child>
);

export default CloseIconCountry;
