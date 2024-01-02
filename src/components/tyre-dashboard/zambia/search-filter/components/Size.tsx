import React, { FormEvent, useEffect, useState } from 'react';
import DropDownIcon from 'components/common/Dropdownicon';
import { NextRouter, useRouter } from 'next/router';
import { useTyreSize } from 'react-query/hooks/api/tyres/zambia/tyre-size';
import Loading from 'components/loading';
import Error from 'components/error';
import { ISizeDropdown } from '../interfaces/size-dropdown.interface';
import DropdownItem from './DropdownItem';
import SearchInput from './SearchInput';
import { zambiaCountry } from 'components/tyre-dashboard/common/constants';

const Size = ({ getSelectedSizeId, resetToggle }) => {
  const [dropdownData, setDropdownData] = useState<ISizeDropdown[]>([]);
  const [allData, setAllData] = useState<ISizeDropdown[]>([]);
  const [currentSizeName, setCurrentSizeName] = useState<string>('');

  const router: NextRouter = useRouter();
  const { tyreSize, category } = router.query;

  const tyreSizeId =
    tyreSize && !Array.isArray(tyreSize) ? Number(tyreSize) : null;
  const countryId = zambiaCountry.id;
  const categoryId =
    category && !Array.isArray(category) ? Number(category) : null;

  const { data, isLoading, isError, isSuccess } = useTyreSize(
    countryId,
    categoryId
  );

  useEffect(() => {
    if (isSuccess) {
      const findItem = data.data.find((item) => item.tyreSizeId === tyreSizeId);
      if (findItem) {
        setCurrentSizeName(findItem.sizeName);
      } else {
        setCurrentSizeName('');
      }

      const newData = data.data.map((item) => ({
        ...item,
        isChecked: tyreSizeId === item.tyreSizeId ? true : false,
      }));

      setDropdownData(newData);
      setAllData(newData);
    }
    if (resetToggle) {
      setCurrentSizeName('');
    }
  }, [isSuccess, router.query, router, resetToggle]);

  const handleCheck = (event: FormEvent<HTMLInputElement>) => {
    const newAllData = allData.map((item) => {
      const findItem =
        Number(event.currentTarget.value) === item.tyreSizeId ? item : null;
      if (findItem) {
        setCurrentSizeName(findItem.sizeName);
      }
      return {
        ...item,
        isChecked: findItem ? true : false,
      };
    });

    getSelectedSizeId(Number(event.currentTarget.value));

    const newDropdownData = dropdownData.map((item) => ({
      ...item,
      isChecked: newAllData.find((x) => x.tyreSizeId === item.tyreSizeId)
        .isChecked,
    }));

    setDropdownData(newDropdownData);
    setAllData(newAllData);
  };

  return (
    <div className="pt-2 2xl:w-1/3 lg:w-1/3 sm:w-full xs:w-full xxs:w-full px-2 2xl:mb-2 lg:mb-2 md:mb-2 sm:mb-2 xs:mb-2 xxs:mb-2">
      <div className="relative">
        <button
          id="zambiaDropdownButton"
          data-dropdown-toggle="zambiaDropdownSearch"
          data-dropdown-placement="bottom"
          className="w-full text-gray-700 bg-white focus:outline-none focus:ring-blue-300 font-medium text-xs px-4 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:p-1 lg:p-1 xl:p-2 2xl:p-2"
          type="button"
        >
          {currentSizeName ? currentSizeName : 'Tyre Size'}
          <DropDownIcon />
        </button>

        <div
          id="zambiaDropdownSearch"
          className={`bg-white hidden rounded-lg shadow w-60 dark:bg-gray-700`}
        >
          <SearchInput allData={allData} setDropdownData={setDropdownData} />

          <ul
            className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="zambiaDropdownButton"
          >
            {isLoading && <Loading />}
            {(!data || isError) && !isLoading && <Error />}

            {isSuccess &&
              data &&
              dropdownData.map((item) => (
                <DropdownItem
                  key={item.tyreSizeId}
                  isChecked={item.isChecked}
                  id={item.tyreSizeId}
                  name={item.sizeName}
                  handleCheck={handleCheck}
                />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Size;
