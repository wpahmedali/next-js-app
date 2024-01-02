import React, { useEffect, useState } from 'react';
import 'flowbite';
import { useRouter } from 'next/router';
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

const FiltersSearch = () => {
  const [minYear, setMinYear] = useState(1970);
  const [models, setModels] = useState<IDropdownData[]>([]);
  const [resetToggle, setResetToggle] = useState(false);

  const router = useRouter();
  const { from_year } = router.query;
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
      chassisNo: '',
    });
    setResetToggle(!resetToggle);
    setMinYear(1970);
    setModels([]);
    const path = router.asPath.split('?');
    if (path.length > 1) {
      router.push(path[0]);
    }
  };

  return (
    <div className="flex flex-wrap md:mt-2 sm:mt-2 xs:mt-2 xxs:mt-2 lg:-mt-12 relative backdrop-blur-xl bg-black/70 hover:backdrop-blur-lg py-3 px-1 lg:mx-7 sm:mx-2 xs:mx-1 rounded-md md:mb-2 sm:mb-2 xs:mb-2 xxs:mb-2 z-30">
      <SearchMaker
        updateFilters={updateFilters}
        setModels={setModels}
        resetToggle={resetToggle}
      />
      <SearchModel
        updateFilters={updateFilters}
        models={models}
        resetToggle={resetToggle}
      />
      <SearchSteering updateFilters={updateFilters} resetToggle={resetToggle} />
      <SearchTransmission
        updateFilters={updateFilters}
        resetToggle={resetToggle}
      />
      <SearchFuel updateFilters={updateFilters} resetToggle={resetToggle} />
      <SearchMinYear
        changeMinYear={changeMinYear}
        updateFilters={updateFilters}
        resetToggle={resetToggle}
        setMinYear={setMinYear}
      />
      <SearchMaxYear
        minYear={minYear}
        updateFilters={updateFilters}
        resetToggle={resetToggle}
      />
      <SearchBodyType updateFilters={updateFilters} resetToggle={resetToggle} />
      <SearchChassisNo
        updateFilters={updateFilters}
        resetToggle={resetToggle}
      />
      <SearchButton filters={filters} resetButtonClick={resetButtonClick} />
    </div>
  );
};

export default FiltersSearch;
