import React from 'react';
import Image from 'next/image';
import { IBodyType } from 'components/body-type/interfaces/body-type.interface';
import { NextRouter, useRouter } from 'next/router';
import { ROUTES } from 'src/common/routes';
import { useVehicleListView } from 'src/providers/VehicleListView';
import {
  useDispatchLoadingState,
  useLoadingState,
} from 'src/providers/LoadingContext';
import { useVehicleList } from 'react-query/hooks/api/vehicle/vehicle-list';
import { reactQuery } from 'src/common/constants';
import { listingViews } from 'src/common/listing-views';
import Loading from 'components/loading';
import { useCurrentCountryName } from 'src/hooks/current-country-name';
import { useRouterParams } from 'src/hooks/router-params';

const BodyTypeItem = ({
  isEven,
  name,
  id,
  bodyTypeCount,
  image,
  hideDialog,
}: IBodyType): JSX.Element => {
  const router: NextRouter = useRouter();
  const { country, yard } = router.query;
  const setLoadingState = useDispatchLoadingState();
  const selectedCountry = useCurrentCountryName();
  const view = useVehicleListView();
  const loadingState = useLoadingState();
  const params = useRouterParams(router.query);

  let viewParam = reactQuery.vehicleList.tabular;
  if (view === listingViews.grid) {
    params.perPage = params.page * params.perPage;
    params.page = 1;
    viewParam = reactQuery.vehicleList.grid;
  }
  const { isPreviousData } = useVehicleList(viewParam, params);

  const baseUrl = country
    ? yard
      ? `${ROUTES.USED_VEHICLES_YARDS}/${yard}/${country}`
      : `${ROUTES.USED_VEHICLES}/${country}`
    : yard
    ? `${ROUTES.USED_VEHICLES_YARDS}${
        params.countryId
          ? `/${selectedCountry.toLowerCase()}-${params.countryId}`
          : ROUTES.ALL_STOCK
      }`
    : `${ROUTES.USED_VEHICLES}${
        params.countryId
          ? `/${selectedCountry.toLowerCase()}-${params.countryId}`
          : ROUTES.ALL_STOCK
      }`;

  const handleLinkClick = () => {
    router.push(
      `${baseUrl}/${name.toLowerCase()}-${id}/1${
        params.isReserved ? `?is_reserved=true` : ''
      }`
    );
    setLoadingState({ type: 'bodyTypeLoader' });
    if (hideDialog) {
      hideDialog('');
    }
  };

  const renderContent = () => {
    if (
      isPreviousData &&
      loadingState === 'bodyTypeLoader' &&
      id === Number(params.bodyTypeId)
    ) {
      return <Loading height="h-4" width="w-4" />;
    } else {
      return (
        <Image
          className="flex-none w-8 h-full"
          src={`/assets/bodytypes/${image}.png`}
          alt={image}
          width={50}
          height={50}
        />
      );
    }
  };

  return (
    <div
      className={`${
        isEven ? 'bg-[#E8E8E8]' : 'bg-[#CECECE]'
      } rounded-sm relative px-3 w-full py-2 hover:bg-black hover:text-white`}
    >
      <button
        onClick={handleLinkClick}
        className="w-full text-left flex items-center outline-none focus:outline-none"
      >
        {renderContent()}
        <span className="text-xs pl-1 flex-1 ">{name.toUpperCase()}</span>
        <span className="mr-2">{bodyTypeCount}</span>
      </button>
    </div>
  );
};

export default BodyTypeItem;
