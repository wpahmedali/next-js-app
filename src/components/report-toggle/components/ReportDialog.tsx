import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import CloseIconCountry from 'components/common/CloseIconCountry';
import { ICountryDialog } from 'components/right-menu/components/country-dialog/interfaces/country-dialog.interface';
import ReportsButtons from './ReportButtons';

const ReportDialog = ({
  isShowDialog,
  hideDialog,
}: ICountryDialog): JSX.Element => {
  return (
    <Transition.Root show={isShowDialog === 'reports'} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={() => hideDialog('')}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

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
                  <CloseIconCountry hideDialog={hideDialog} />
                  <div className="flex h-3/3 flex-col overflow-auto max-h-screen bg-white py-6 shadow-xl 2xl:mt-36 2xl:mr-64 xl:mt-32 xl:mr-48 lg:mt-32 lg:mr-8">
                    <div className="px-4 sm:px-6">
                      <div className="text-base font-semibold leading-6 text-gray-900">
                        <Dialog.Title>All Reports</Dialog.Title>

                        <ReportsButtons />

                        <div className="flex justify-end">
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

export default ReportDialog;
