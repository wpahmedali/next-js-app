import React, { useEffect, useRef, useState } from 'react';
import 'flowbite';
import { NextRouter, useRouter } from 'next/router';
import { getEmptyFiltersData } from 'utils/get-empty-filters-data';
import SearchMaker from '../SearchMaker';
import SearchModel from '../SearchModel';
import SearchSteering from '../SearchSteering';
import SearchTransmission from '../SearchTransmission';
import SearchFuel from '../SearchFuel';
import SearchMinYear from '../SearchMinYear';
import SearchMaxYear from '../SearchMaxYear';
import SearchBodyType from '../SearchBodyType';
import SearchChassisNo from '../SearchChassisNo';
import SearchButton from 'components/common/Searchbutton';
import { IFilters } from 'components/global-filters/interfaces/filters.interface';
import { IDropdownData } from 'components/global-filters/interfaces/dropdown-data.interface';
import SearchStockNo from '../SearchStockNo';
import { useDispatchLoadingState } from 'src/providers/LoadingContext';
import { GetBacklistingUrl } from 'src/hooks/get-back-listing-url';
import { useSetContext } from 'src/providers/ModelContext';
import { useRouterParams } from 'src/hooks/router-params';
import { createFilterQuery } from 'utils/create-queries';
import { ROUTES } from 'src/common/routes';
import { useCurrentCountryName } from 'src/hooks/current-country-name';

const FiltersSearch = () => {
  const [minYear, setMinYear] = useState(1970);
  const [models, setModels] = useState<IDropdownData[]>([]);
  const [resetToggle, setResetToggle] = useState(false);
  const [dropdownState, setDropdownState] = useState<string>();

  const dropdownRef = useRef(null);
  const router: NextRouter = useRouter();
  const setLoadingState = useDispatchLoadingState();
  const backBaseUrl = GetBacklistingUrl(router);
  const setContext = useSetContext();
  const selectedCountry = useCurrentCountryName();
  const params = useRouterParams(router.query);
  const { from_year, country } = router.query;

  const emptyFilters = getEmptyFiltersData(router.query);
  const [filters, setFilters] = useState<IFilters>(emptyFilters);

  const changeMinYear = (year: number) => setMinYear(year);

  useEffect(() => {
    if (!from_year) {
      changeMinYear(1970);
    }
  }, [from_year]);

  useEffect(() => {
    const path = router.asPath.split('?');
    if (path.length < 2) {
      setFilters({
        makers: [],
        models: [],
        steerings: [],
        trans: [],
        fuel: [],
        minYear: [],
        maxYear: [],
        bodyTypes: [],
        stockNo: '',
        chassisNo: '',
      });
    }
  }, [router]);

  const updateFilters = (data: string[], key: string) =>
    setFilters((val) => ({ ...val, [key]: data }));

  const resetButtonClick = () => {
    setFilters({
      makers: [],
      models: [],
      steerings: [],
      trans: [],
      fuel: [],
      minYear: [],
      maxYear: [],
      bodyTypes: [],
      stockNo: '',
      chassisNo: '',
    });
    setResetToggle(!resetToggle);
    setMinYear(1970);
    setModels([]);
    // const path = router.asPath.split('?');
    // if (path.length > 1) {
    //   router.push(path[0]);
    // }
    if (country) {
      router.push(`${ROUTES.COUNTRY_CAR_LIST}/${country}/1`);
    }
  };

  const handleOnKeyDown = () => {
    const query = createFilterQuery(filters);

    if (query) {
      setLoadingState({ type: 'searchLoader' });
      let pathname = router.pathname;
      const queryParams = router.query;
      queryParams.page = '1';

      Object.keys(queryParams).forEach((key: string) => {
        pathname = pathname.replace(`[${key}]`, String(queryParams[key]));
      });

      if (router.query.carId || router.query.contact) {
        pathname = backBaseUrl;
      }

      router.push(
        pathname.length > 1
          ? pathname + query
          : `${
              params.countryId
                ? `/${selectedCountry.toLowerCase()}-${params.countryId}`
                : ROUTES.ALL_STOCK
            }/1` + query
      );

      setContext('');
      if (dropdownState) {
        setDropdownState('');
      }
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownState('');
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="flex flex-wrap md:mt-2 sm:mt-2 xs:mt-2 xxs:mt-2 lg:-mt-12 relative backdrop-blur-xl 3xl:bg-black/70 2xl:bg-black/70 xl:bg-black/70 lg:bg-black/70 md:bg-black/70 sm:bg-none xs:bg-none xxs:bg-none hover:backdrop-blur-lg py-3 px-1 lg:mx-7 sm:mx-2 xs:mx-1 rounded-md md:mb-2 sm:mb-2 xs:mb-2 xxs:mb-2 z-20"
    >
      <SearchMaker
        updateFilters={updateFilters}
        setModels={setModels}
        models={models}
        resetToggle={resetToggle}
        dropdownState={dropdownState}
        setDropdownState={setDropdownState}
      />
      <SearchModel
        updateFilters={updateFilters}
        models={models}
        resetToggle={resetToggle}
        dropdownState={dropdownState}
        setDropdownState={setDropdownState}
      />
      <SearchSteering
        updateFilters={updateFilters}
        resetToggle={resetToggle}
        dropdownState={dropdownState}
        setDropdownState={setDropdownState}
      />
      <SearchTransmission
        updateFilters={updateFilters}
        resetToggle={resetToggle}
        dropdownState={dropdownState}
        setDropdownState={setDropdownState}
      />
      <SearchFuel
        updateFilters={updateFilters}
        resetToggle={resetToggle}
        dropdownState={dropdownState}
        setDropdownState={setDropdownState}
      />
      <SearchMinYear
        changeMinYear={changeMinYear}
        updateFilters={updateFilters}
        resetToggle={resetToggle}
        setMinYear={setMinYear}
        dropdownState={dropdownState}
        setDropdownState={setDropdownState}
      />
      <SearchMaxYear
        minYear={minYear}
        updateFilters={updateFilters}
        resetToggle={resetToggle}
        dropdownState={dropdownState}
        setDropdownState={setDropdownState}
      />
      <SearchBodyType
        updateFilters={updateFilters}
        resetToggle={resetToggle}
        dropdownState={dropdownState}
        setDropdownState={setDropdownState}
      />
      <SearchStockNo
        handleOnKeyDown={handleOnKeyDown}
        updateFilters={updateFilters}
        resetToggle={resetToggle}
        dropdownState={dropdownState}
        setDropdownState={setDropdownState}
      />
      <SearchChassisNo
        handleOnKeyDown={handleOnKeyDown}
        updateFilters={updateFilters}
        resetToggle={resetToggle}
        dropdownState={dropdownState}
        setDropdownState={setDropdownState}
      />
      <SearchButton
        handleOnKeyDown={handleOnKeyDown}
        resetButtonClick={resetButtonClick}
        dropdownState={dropdownState}
        setDropdownState={setDropdownState}
      />
    </div>
  );
};

export default FiltersSearch;
