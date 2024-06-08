import React, { Fragment } from 'react';
import { NextRouter, useRouter } from 'next/router';
import { useMakerModel } from 'react-query/hooks/api/marker-model';
import Loading from 'components/loading';
import Error from 'components/error';
import MobileMakerModel from './components/MakerModel';
import { useRouterParams } from 'src/hooks/router-params';
import { Dialog, Transition } from '@headlessui/react';
import CloseIcon from 'components/common/CloseIcon';

const MobileMakers = ({
  isLoading: makerIsLoading,
  makerId,
  isShowDialog,
  hideDialog,
}): JSX.Element => {
  const router: NextRouter = useRouter();
  const params = useRouterParams(router.query);

  const { data, isLoading, isError, isSuccess } = useMakerModel(
    params.countryId,
    params.auctionId
  );

  return (
    <Transition.Root show={isShowDialog === 'makerModel'} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-40"
        onClose={() => hideDialog('SET_VALUE', '')}
      >
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
                  <CloseIcon hideDialog={hideDialog} />
                  <div className="flex h-3/3 flex-col overflow-auto max-h-screen bg-white py-6 shadow-xl 2xl:mt-36 2xl:mr-64 xl:mt-32 xl:mr-48 lg:mt-32 lg:mr-8">
                    <div className="px-4 sm:px-6">
                      <div className="text-base font-semibold leading-6 text-gray-900">
                        <Dialog.Title>All Maker List</Dialog.Title>

                        {isLoading && <Loading />}
                        {(!data || isError) && !isLoading && <Error />}
                        {isSuccess && (
                          <ul className="bg-white group-hover:scale-100 hover:sm:duration-0 text-[#2b2a2a] transition duration-150 ease-in-out origin-top w-full">
                            <div className="container-fluid mx-auto grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 pt-2 gap-4">
                              {data?.data?.map((item, i) => (
                                <MobileMakerModel
                                  loadingMakerId={makerId}
                                  makerIsLoading={makerIsLoading}
                                  key={i}
                                  models={item.models}
                                  makerName={item.makerName}
                                  makerId={item.makerId}
                                  makerCount={item.makerCount}
                                  image={item.cssClass.toLowerCase()}
                                  isEven={i % 2 === 0 ? true : false}
                                />
                              ))}
                            </div>
                          </ul>
                        )}

                        <div className="flex justify-end">
                          <button
                            className="rounded-lg bg-primaryDark text-white p-2 mt-3"
                            onClick={() => hideDialog('SET_VALUE', '')}
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

export default MobileMakers;
