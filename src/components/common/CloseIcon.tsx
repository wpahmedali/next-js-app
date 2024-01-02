import { Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ICloseIcon } from 'components/right-menu/components/country-dialog/interfaces/close-icon.interface';
import React, { Fragment } from 'react';

const CloseIcon = ({ hideDialog }: ICloseIcon): JSX.Element => (
  <Transition.Child
    as={Fragment}
    enter="ease-in-out duration-500"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="ease-in-out duration-500"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <div className="absolute left-0 2xl:top-32 2xl:-ml-8 xl:top-32 lg:top-28 -ml-8 flex pr-2 pt-4 sm:-ml-0 sm:-mt-2 sm:pr-4 xl:-ml-6 md:ml-2 md:-mt-3">
      <button
        type="button"
        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
        onClick={() => hideDialog('')}
      >
        <span className="sr-only">Close panel</span>
        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  </Transition.Child>
);

export default CloseIcon;
