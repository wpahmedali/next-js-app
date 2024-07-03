import React, { Fragment } from 'react';
import FiltersSearch from './FiltersSearch';
import { Dialog, Transition } from '@headlessui/react';
import CloseIcon from 'components/common/CloseIcon';

const MobileFilterView = ({ isShowDialog, hideDialog }) => {
  return (
    <Transition.Root show={isShowDialog === 'filter'} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={() => hideDialog('')}>
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 md:pl-0 2xl:pl-10 xl:pl-10 lg:pl-10 sm:pl-0 xs:pl-0 xxs:pl-0">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-screen-2xl">
                  <CloseIcon hideDialog={hideDialog} />
                  <div className="flex h-3/3 flex-col overflow-auto max-h-screen bg-white py-6 shadow-xl 2xl:mt-36 2xl:mr-64 xl:mt-32 xl:mr-48 lg:mt-32 lg:mr-8 h-screen">
                    <div className="px-4 sm:px-6">
                      <div className="text-base font-semibold leading-6 text-gray-900">
                        <Dialog.Title>Search Vehicles</Dialog.Title>

                        <FiltersSearch />
                        <div className="flex justify-end mb-12">
                          <button
                            className="rounded-lg bg-primaryDark text-white p-2 mt-3"
                            onClick={() => hideDialog('')}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileFilterView;
