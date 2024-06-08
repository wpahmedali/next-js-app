import { NextRouter, useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { useSearchByChassisNo } from 'react-query/hooks/api/search-by-chassis-no';
import { getIdFromParam } from 'utils/get-id-from-param';
import SearchResult from './SearchResult';
import { debounce } from 'utils/debounce';
import { SearchIcon } from 'icons';
import Loading from 'components/loading';
import { ISearchByChassissNumberData } from 'src/interfaces/philippine-country-list.interface copy';
import SelectedItem from './SelectedItem';

const ChassisFilter = ({ setFormData, allErrors }): JSX.Element => {
  const [selectedData, setSelectedData] =
    useState<ISearchByChassissNumberData>(null);
  const [searchKeyword, setSearchKeyword] = useState('');

  const router: NextRouter = useRouter();
  const { country } = router.query;

  const countryId =
    country && !Array.isArray(country) && country !== 'all_stock'
      ? getIdFromParam(country)
      : 0;

  const { data, isLoading, isSuccess, mutate } = useSearchByChassisNo({
    country_id: countryId,
    keyword: searchKeyword,
  });

  useEffect(() => {
    if (searchKeyword?.length > 3) {
      fetchDebouncedSearch();
    }
  }, [searchKeyword]);

  const fetchDebouncedSearch = useRef(
    debounce(() => {
      mutate();
    }, 600)
  ).current;

  return (
    <div className="bg-primaryDark w-full p-3 mt-2">
      <div className="p-3">
        <label className="sr-only">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon />
          </div>
          <input
            type="text"
            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search By Chassis#"
            onChange={(e) => {
              setSearchKeyword(e.target.value);
              setSelectedData(null);
            }}
          />
        </div>
      </div>

      {isLoading && <Loading />}
      {isSuccess && !selectedData && (
        <ul
          className=" bg-white p-4 h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby={`MaxYearDropdownButton`}
        >
          {data?.data?.map((item, i) => (
            <SearchResult
              key={i}
              item={item}
              setSelectedData={setSelectedData}
              setFormData={setFormData}
              countryId={countryId}
            />
          ))}
        </ul>
      )}
      {selectedData && <SelectedItem selectedData={selectedData} />}
      {allErrors?.system_car_img && (
        <p className="text-red-500 block">{allErrors.system_car_img}</p>
      )}
    </div>
  );
};

export default ChassisFilter;
