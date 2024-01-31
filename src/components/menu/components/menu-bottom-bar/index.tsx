import React from 'react';
import { AboutUsIcon } from 'icons/react-icons/Aboutus';
import { FAQIcon } from 'icons/react-icons/FAQ';
import { GlobalbtnIcon } from 'icons/react-icons/Globalbtn';
import { NextRouter, useRouter } from 'next/router';
import { useVehicleListView } from 'src/providers/VehicleListView';
import { useLoadingState } from 'src/providers/LoadingContext';
import { useRouterParams } from 'src/hooks/router-params';
import { useVehicleList } from 'react-query/hooks/api/vehicle-list';
import { reactQuery } from 'src/common/constants';
import { listingViews } from 'src/common/listing-views';
import MobileMakers from 'components/makers/components/mobile-view';
import MobileBodyTypes from 'components/body-type/components/MobileBodyType';
import MobileFilterView from 'components/global-filters/components/filter-views/MobileFilterView';
import { useModelState, useSetContext } from 'src/providers/ModelContext';
import { useSelectedCountryIcon } from 'src/hooks/selected-country-icon';
import { siteSettings } from 'utils/siteSetting';

const MenuBottomBar = (): JSX.Element => {
  const { query }: NextRouter = useRouter();
  const loadingState = useLoadingState();
  const modelState = useModelState();
  const setContext = useSetContext();
  const view = useVehicleListView();
  const countryIcon = useSelectedCountryIcon();
  const params = useRouterParams(query);
  const { defaultCountryShown, countryList } = siteSettings;

  let viewParam = reactQuery.vehicleList.tabular;
  if (view === listingViews.grid) {
    params.perPage = params.page * params.perPage;
    params.page = 1;
    viewParam = reactQuery.vehicleList.grid;
  }
  const { isPreviousData } = useVehicleList(viewParam, params);

  const countriesList = countryList?.find(
    (x) => x.countryId === params.countryId
  )?.countriesToBeShown;

  const showSwitchButton =
    (defaultCountryShown && !params.countryId) ||
    (!defaultCountryShown && countriesList?.length > 0) ||
    (!defaultCountryShown && !(countriesList?.length > 0)) ||
    (defaultCountryShown && countriesList?.length > 0);

  return (
    <section
      id="bottom-navigation"
      className="block fixed inset-x-0 bottom-0 z-50 bg-black drop-shadow-2xl"
    >
      <div id="tabs" className="flex justify-between">
        <button
          onClick={() => setContext('makerModel')}
          className="w-full focus:fill-black hover:fill-black grid justify-center hover:bg-primary text-center pt-2 pb-1"
        >
          <AboutUsIcon />
          <div className="tab tab-account block text-xs">
            <div className="w-fill cursor-pointer flex">
              <span className="text-xs font-normal text-white hover:text-black flex gap-2">
                <span className="flex items-center">Maker Model</span>
              </span>
              <MobileMakers
                isLoading={isPreviousData && loadingState === 'makerLoader'}
                makerId={Number(params.makerId)}
                isShowDialog={modelState}
                hideDialog={setContext}
              />
            </div>
          </div>
        </button>
        <button
          onClick={() => setContext('bodyType')}
          className="w-full focus:fill-black hover:fill-black grid justify-center hover:bg-primary text-center pt-2 pb-1"
        >
          <FAQIcon />
          <div className="tab tab-account block text-xs">
            <div className="w-fill cursor-pointer flex">
              <span className="text-xs font-normal text-white hover:text-black flex gap-2">
                <span className="flex items-center">Body Types</span>
              </span>
              <MobileBodyTypes
                isShowDialog={modelState}
                hideDialog={setContext}
              />
            </div>
          </div>
        </button>
        <button
          onClick={() => setContext('filter')}
          className="w-full focus:fill-black hover:fill-black grid justify-center hover:bg-primary text-center pt-2 pb-1"
        >
          <GlobalbtnIcon />
          <div className="tab tab-account block text-xs">
            <div className="w-fill cursor-pointer flex">
              <span className="text-xs font-normal text-white hover:text-black flex gap-2">
                <span className="flex items-center">Search Vehicles</span>
              </span>
              <MobileFilterView
                isShowDialog={modelState}
                hideDialog={setContext}
              />
            </div>
          </div>
        </button>
        {showSwitchButton && (
          <button
            onClick={() => setContext('country')}
            className="w-full focus:fill-black text-white hover:fill-black grid justify-center hover:bg-primary text-center pt-5 pb-1 justify-items-center"
          >
            {countryIcon}
            <div className="tab tab-account block text-xs">
              <div className="w-fill cursor-pointer flex">
                <span className="text-xs font-normal text-white hover:text-black flex gap-2">
                  <span className="flex items-center">Switch</span>
                </span>
              </div>
            </div>
          </button>
        )}
      </div>
    </section>
  );
};

export default MenuBottomBar;
