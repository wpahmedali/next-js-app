import React, { useState } from 'react';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import Ads from 'components/right-menu/components/ads';
import CountryToggleMenu from 'components/right-menu/components/CountryToggleMenu';
import TopShowedCountry from 'components/right-menu/components/TopShowedCountry';
import { siteSettings } from 'utils/siteSetting';
import { useRouter } from 'next/router';
import { useRouterParams } from 'src/hooks/router-params';
import EmbeddedFB from './components/EmbeddedFB';
import FeatureCars from 'components/feature-cars';
import { reactQuery, vehiclePerPageList } from 'src/common/constants';
import { useFeatureVehicleList } from 'react-query/hooks/api/feature-vehicle-list';
import Loading from 'components/loading';
import Error from 'components/error';

const RightMenu = (): JSX.Element => {
  const { query } = useRouter();
  const params = useRouterParams(query);
  const { defaultCountryShown, countryList } = siteSettings;

  const [page, setPage] = useState<number>(1);

  const countriesList = countryList?.find(
    (x) => x.countryId === params.countryId
  )?.countriesToBeShown;

  const showSwitchButton =
    (defaultCountryShown && !params.countryId) ||
    (!defaultCountryShown && countriesList?.length > 0) ||
    (!defaultCountryShown && !(countriesList?.length > 0)) ||
    (defaultCountryShown && countriesList?.length > 0);

  params.perPage = params.page * vehiclePerPageList;
  params.page = page;

  const { data, isLoading, isError, isFetching, isPreviousData } =
    useFeatureVehicleList(params.countryId, params.page, params.perPage);

  return (
    <div className="xxs:w-full xs:w-full sm:w-full 2xl:w-[375px] xl:w-[375px] lg:w-[375px] md:w-[300px] flex-col">
      <div className="w-full">
        {/* <h2 className="flex text-sm font-normal leading-4 bg-primaryDark text-center text-white py-2 gap-2 px-2 md:text-xs">
          <GlobeAltIcon className="h-6 w-6 flex items-center" />
          <span className="flex items-center">All Country</span>
        </h2> */}
        <ul className="w-full rounded-lg mb-1 text-blue-800">
          <TopShowedCountry />
          {showSwitchButton && <CountryToggleMenu />}
        </ul>
        <Ads data={data?.data?.carList} />
        {isError && <Error />}
        {isLoading && (
          <div className="pt-3">
            <Loading />
          </div>
        )}
        {data?.data?.carList?.length > 0 && (
          <FeatureCars
            data={data?.data?.carList}
            isFetching={isFetching}
            isPreviousData={isPreviousData}
            setPage={setPage}
          />
        )}
        {/* <EmbeddedFB /> */}
      </div>
    </div>
  );
};

export default RightMenu;
