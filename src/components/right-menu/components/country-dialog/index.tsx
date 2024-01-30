import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { useCountry } from 'react-query/hooks/api/country';
import CountryItem from 'components/right-menu/components/country-dialog/components/CountryItem';
import Error from 'components/error';
import Loading from 'components/loading';
import CloseIcon from 'components/common/CloseIcon';
import { NextRouter, useRouter } from 'next/router';
import { ICountryDialog } from 'components/right-menu/components/country-dialog/interfaces/country-dialog.interface';
import { getCountryIcon } from 'utils/get-country-icon';
import { useVehicleListView } from 'src/providers/VehicleListView';
import { useRouterParams } from 'src/hooks/router-params';
import { useVehicleList } from 'react-query/hooks/api/vehicle-list';
import { reactQuery } from 'src/common/constants';
import { listingViews } from 'src/common/listing-views';
import { siteSettings } from 'utils/siteSetting';
import { ICountry } from 'src/interfaces/country.interface';

const CountryDialog = ({
  isShowDialog,
  hideDialog,
}: ICountryDialog): JSX.Element => {
  const router: NextRouter = useRouter();
  const params = useRouterParams(router.query);
  const { data, isLoading, isError, isSuccess } = useCountry();
  const view = useVehicleListView();
  const { defaultCountryShown, specificCountriesShown, countryList } =
    siteSettings;

  let countries = data?.data?.map((item) => ({
    ...item,
    icon: getCountryIcon(item.cssClass),
  }));

  const countriesList = countryList?.find(
    (x) => x.countryId === params.countryId
  )?.countriesToBeShown;

  if (!defaultCountryShown && specificCountriesShown && countriesList) {
    countries = countries?.filter((item) => countriesList.includes(item.id));
  }

  let viewParam = reactQuery.vehicleList.tabular;
  if (view === listingViews.grid) {
    params.perPage = params.page * params.perPage;
    params.page = 1;
    viewParam = reactQuery.vehicleList.grid;
  }
  const { isPreviousData } = useVehicleList(viewParam, params);

  const globalContactsData: ICountry = {
    id: 0,
    countryName: null,
    countryCode: null,
    cssClass: null,
    FBPageName: null,
    FBAppId: null,
    countryCount: data?.totalStock || null,
    is_count: false,
    auctionDisplay: null,
    auctionId: null,
    auctionShortName: null,
    auctionName: null,
    specialOffer: null,
    specialOfferTotal: null,
    showReservedTag: 0,
    isAuctionSheetDisplay: 0,
  };

  return (
    <Transition.Root show={isShowDialog === 'country'} as={Fragment}>
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
                  <CloseIcon hideDialog={hideDialog} />
                  <div className="flex h-3/3 flex-col overflow-auto max-h-screen bg-white py-6 shadow-xl 2xl:mt-36 2xl:mr-64 xl:mt-32 xl:mr-48 lg:mt-32 lg:mr-8">
                    <div className="px-4 sm:px-6">
                      <div className="text-base font-semibold leading-6 text-gray-900">
                        <Dialog.Title>All Countries Stock</Dialog.Title>

                        {isLoading && <Loading />}
                        {(data?.data?.length === 0 || isError) &&
                          !isLoading && <Error />}
                        {isSuccess && data.data.length !== 0 && (
                          <div className="container-fluid mx-auto grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 pt-2 gap-4">
                            <CountryItem
                              hideDialog={hideDialog}
                              isPreviousData={isPreviousData}
                              item={globalContactsData}
                              icon={
                                <GlobeAltIcon className="h-6 w-6 items-center flex" />
                              }
                              name="Global"
                            />

                            {countries.map((item) => (
                              <CountryItem
                                hideDialog={hideDialog}
                                isPreviousData={isPreviousData}
                                key={item.id}
                                item={item}
                                icon={item.icon}
                                name={item.countryName}
                              />
                            ))}
                          </div>
                        )}

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

export default CountryDialog;
