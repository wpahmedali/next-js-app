import React from 'react';
import { ICountryItem } from 'components/right-menu/components/country-dialog/interfaces/country-item.interface';
import { useRouter } from 'next/router';
import {
  useDispatchLoadingState,
  useLoadingState,
} from 'src/providers/LoadingContext';
import Loading from 'components/loading';
// import { useIsAuctionCountry } from 'src/hooks/auction-country';
import { ROUTES } from 'src/common/routes';
import { useRouterParams } from 'src/hooks/router-params';

const CountryItem = ({
  hideDialog,
  isPreviousData,
  item,
  icon,
  name,
}: ICountryItem): JSX.Element => {
  const router = useRouter();
  const loadingState = useLoadingState();
  const setLoadingState = useDispatchLoadingState();
  const params = useRouterParams(router.query);
  // const isAuctionCountry = useIsAuctionCountry(item?.id);

  const gotoCountryCarList = () => {
    let url = ROUTES.ALL_STOCK + '/1';

    if (item.id !== 0) {
      // if (isAuctionCountry) {
      //   url = `${ROUTES.AUCTION}/${item.auctionShortName.toLowerCase()}-${
      //     item.auctionId
      //   }/${item.id}/1`;
      // } else {
      url = `${ROUTES.COUNTRY_CAR_LIST}/${item.countryName.toLowerCase()}-${
        item.id
      }/1`;
      // }
    }

    if (url) {
      router.push(url);
      hideDialog('');
      setLoadingState({ type: 'countryLoading' });
    }
  };

  const renderContent = () => {
    if (
      isPreviousData &&
      loadingState === 'countryLoading' &&
      params.countryId === item?.id
    ) {
      return <Loading height="h-5" width="w-5" />;
    } else {
      return <span className="flex items-center border">{icon}</span>;
    }
  };

  return (
    <button onClick={gotoCountryCarList}>
      <div className="h-auto p-3 flex justify-items-start content-center rounded-lg bg-white bg-clip-border text-gray-700 shadow-md transition-all hover:shadow-lg hover:shadow-gray-200 focus:opacity-[0.85] border border-slate-200">
        {renderContent()}
        <div className="mx-2 text-xs flex items-center">
          {name.toUpperCase()}
          <span className="ml-2">{item?.countryCount}</span>
        </div>
      </div>
    </button>
  );
};

export default CountryItem;
