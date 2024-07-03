import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import CloseIcon from 'components/common/CloseIcon';
import { ICountryDialog } from 'components/right-menu/components/country-dialog/interfaces/country-dialog.interface';
import FiltersSearch from 'components/global-filters/components/filter-views/FiltersSearch';
import { useSetContext } from 'src/providers/ModelContext';

const SmartMenuModel = ({
  isShowDialog,
  hideDialog,
}: ICountryDialog): JSX.Element => {
  const setContext = useSetContext();

  const handleMukechi1Click = async () => {
    setContext('specailMenuItemModel');
  };
  return (
    <Transition.Root show={isShowDialog === 'smartMenu'} as={Fragment}>
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
            <div className="pointer-events-none fixed inset-y-0 right-0 top-52 flex max-w-full pl-10 md:pl-0 2xl:pl-10 xl:pl-10 lg:pl-10 sm:pl-0 xs:pl-0 xxs:pl-0">
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
                  <div className="flex flex-row overflow-auto h-auto 3xl:bg-[#f8f8ff24] 2xl:bg-[#f8f8ff24] xl:bg-[#f8f8ff24] lg:bg-[#f8f8ff24] md:bg-[#f8f8ff24] sm:bg-gray-100 xs:bg-gray-100 xxs:bg-gray-100 py-6 border border-gray-300 rounded-xl 2xl:mt-1 2xl:mr-2 xl:mt-1 xl:mr-2 lg:mt-1 lg:mr-2">
                    <div className="px-4 sm:px-6">
                      <div className="text-base font-semibold leading-6 text-gray-900">
                        <Dialog.Title>Quick Links </Dialog.Title>
                        <div
                          className="p-2 rounded-lg border border-gray-100 text-sm px-14 bg-gray-50 hover:bg-black hover:text-white relative focus:ring-offset-2 focus:ring-2 hover:ring-offset-2 hover:ring-2 my-4 cursor-pointer"
                          onClick={handleMukechi1Click}
                        >
                          <a href="#">Mukechi 1</a>
                        </div>
                        <div className="p-2 rounded-lg border border-gray-100 text-sm px-14 bg-gray-50 hover:bg-black hover:text-white relative focus:ring-offset-2 focus:ring-2 hover:ring-offset-2 hover:ring-2 my-4 cursor-pointer">
                          <a href="#">Mukechi 2</a>
                        </div>
                        <div className="p-2 rounded-lg border border-gray-100 text-sm px-14 bg-gray-50 hover:bg-black hover:text-white relative focus:ring-offset-2 focus:ring-2 hover:ring-offset-2 hover:ring-2 my-4 cursor-pointer">
                          <a href="#">Mukechi 3</a>
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

export default SmartMenuModel;
