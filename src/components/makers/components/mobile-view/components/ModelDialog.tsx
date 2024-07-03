import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import CloseIcon from 'components/common/CloseIcon';
import ModelItem from './ModelItem';
import { NextRouter, useRouter } from 'next/router';
import { useRouterParams } from 'src/hooks/router-params';
import { ROUTES } from 'src/common/routes';
import { useSetContext } from 'src/providers/ModelContext';

const ModelDialog = ({
  makerName,
  makerId,
  models,
  makerCount,
  isShowDialog,
  hideDialog,
}): JSX.Element => {
  const setContext = useSetContext();
  const router: NextRouter = useRouter();
  const { yard, country } = router.query;
  const params = useRouterParams(router.query);

  let baseUrl = yard ? ROUTES.USED_CARS_YARDS + '/' + yard : ROUTES.USED_CARS;
  baseUrl += country ? '/' + country : ROUTES.ALL_STOCK;

  const handleOnClick = () => {
    const url = `${baseUrl}/${makerName.toLowerCase()}-${makerId}/all-models/all-chassis/1${
      params.isReserved ? `?is_reserved=true` : ''
    }`;
    router.push(url);
    hideDialog();
    setContext('');
  };

  return (
    <Transition.Root show={isShowDialog} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={hideDialog}>
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
                        <Dialog.Title>
                          All {makerName ? makerName : ''} Models
                        </Dialog.Title>

                        <ul className="bg-white group-hover:scale-100 hover:sm:duration-0 text-[#2b2a2a] transition duration-150 ease-in-out origin-top w-full">
                          <div className="container-fluid mx-auto grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 pt-2 gap-4">
                            <li
                              className={`bg-[#CECECE] rounded-sm relative px-3 w-full py-2 hover:bg-black hover:text-white`}
                            >
                              <button
                                onClick={handleOnClick}
                                className="w-full text-left flex items-center outline-none focus:outline-none"
                              >
                                <span className="text-xs pl-1 flex-1 ">
                                  All {makerName} Models
                                </span>
                                <span className="mr-2">{makerCount}</span>
                                <span className="mr-auto">
                                  <svg
                                    className="fill-current h-4 w-4 transition duration-150 ease-in-out"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                  </svg>
                                </span>
                              </button>
                            </li>

                            {models &&
                              models?.map((item, i) => (
                                <ModelItem
                                  key={i}
                                  makerId={makerId}
                                  makerName={makerName}
                                  modelId={item.modelId}
                                  modelName={item.modelName}
                                  chassis={item.chassisCodes}
                                  modelCount={item.modelCount}
                                  isEven={i % 2 === 0 ? true : false}
                                />
                              ))}
                          </div>
                        </ul>

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

export default ModelDialog;
