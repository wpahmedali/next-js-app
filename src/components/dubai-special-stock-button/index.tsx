import React from 'react';
import { NextRouter, useRouter } from 'next/router';
import Link from 'next/link';
import { ROUTES } from 'src/common/routes';
import { useSelectedCountryIcon } from 'src/hooks/selected-country-icon';
import { useRouterParams } from 'src/hooks/router-params';
import { useDubaiSpecialVehicleList } from 'react-query/hooks/api/dubai-special-vehicle-list';
import { reactQuery, uaeCountry } from 'src/common/constants';
import { useVehicleListView } from 'src/providers/VehicleListView';
import { listingViews } from 'src/common/listing-views';

const DubaiSpecialStockButton = () => {
  const router: NextRouter = useRouter();
  const params = useRouterParams(router.query);
  const countryIcon = useSelectedCountryIcon();
  const view = useVehicleListView();

  let viewParam = reactQuery.vehicleList.tabular;
  if (view === listingViews.grid) {
    params.perPage = params.page * params.perPage;
    params.page = 1;
    viewParam = reactQuery.vehicleList.grid;
  }

  const { data } = useDubaiSpecialVehicleList(
    viewParam,
    uaeCountry.id,
    params.page,
    params.perPage
  );

  return (
    data?.specialStock && (
      <div className="grid w-full grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 grid-rows-1 grid-flow-dense gap-2 ">
        <Link
          href={`${ROUTES.DUBAI_SPECIAL_COUNTRY_CAR_LIST}/u.a.e-${params.countryId}/1`}
        >
          <div
            className={`${
              router.query.special ? 'bg-primary' : 'bg-black'
            }  content-center text-primary justify-left text-left w-full md:my-2 sm:my-2 xs:my-2 xxs:my-2 rounded-md pt-1`}
          >
            <div
              className={`
              ${
                router.query.special ? 'bg-primary' : 'bg-primaryDark'
              }  text-white my-3 font-bold items-center justify-left gap-x-3 px-4 py-5 pt-4 pb-2 flex relative rounded-md`}
            >
              <div>{countryIcon} </div>
              <div className="justify-center items-center flex w-full">
                <div className="absolute -top-5 bg-red-600 text-white text-center font-bold rounded-t-lg w-full p-1 left-0">
                  Special Stock
                </div>
                <div className="text-lg font-bold -ml-8">
                  {`Units: ${data?.specialStock}`}{' '}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  );
};

export default DubaiSpecialStockButton;
