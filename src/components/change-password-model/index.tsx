import React, { Fragment } from 'react';
import CloseIcon from 'components/common/CloseIcon';
import { Dialog, Transition } from '@headlessui/react';
import ChangePasswordForm from './components/ChangePasswordForm';
import { ICountryDialog } from 'components/right-menu/components/country-dialog/interfaces/country-dialog.interface';

const ChangePasswordModel = ({
  isShowDialog,
  hideDialog,
}: ICountryDialog): JSX.Element => {
  return (
    <Transition.Root show={isShowDialog === 'ChangePassword'} as={Fragment}>
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
                <Dialog.Panel className="pointer-events-auto relative w-auto">
                  <CloseIcon hideDialog={hideDialog} />
                  <div className="flex flex-row overflow-auto h-screen bg-gray-50 py-2 shadow-xl 2xl:mt-1 2xl:mr-2 xl:mt-1 xl:mr-2 lg:mt-1 lg:mr-2 3xl:w-96 2xl:w-96 xl:w-96 lg:w-96 md:w-96 sm:w-[414px] xs:w-[390px] xxs:w-[320px]">
                    <div className="px-2 sm:px-2 w-full">
                      <div className="text-base font-semibold leading-6 text-gray-900">
                        <section className="">
                          <div className="flex flex-col items-center justify-start p-0 mx-auto md:h-screen lg:py-0">
                            <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md sm:p-8 h-screen mb-6">
                              <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Change Password
                              </h2>
                              <ChangePasswordForm hideDialog={hideDialog} />
                            </div>
                          </div>
                        </section>
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

export default ChangePasswordModel;
