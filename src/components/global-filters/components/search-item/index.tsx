import React, { FormEvent, useEffect, useState } from 'react';
import DropDownIcon from 'components/common/Dropdownicon';
import Loading from 'components/loading';
import Error from 'components/error';
import { ISearchItem } from '../../interfaces/search-item.interface';
import SearchInput from './SearchInput';
import DropdownItem from './DropdownItem';
import { IDropdownData } from 'components/global-filters/interfaces/dropdown-data.interface';
import { getIdFromParam } from 'utils/get-id-from-param';
import { useRouter } from 'next/router';
import { getRequiredParam } from 'utils/get-required-param';
import ClearButton from './ClearButton';

const SearchItem = ({
  name,
  isYear,
  resetToggle,
  getSelectedData,
  selectedItems,
  data,
  isLoading,
  isError,
  isSuccess,
  updateFilters,
  setMinYear,
  dropdownState,
  setDropdownState,
}: ISearchItem) => {
  const [dropdownData, setDropdownData] = useState<IDropdownData[]>([]);
  const [allData, setAllData] = useState<IDropdownData[]>([]);
  const [selectedNames, setSelectedNames] = useState<string>(null);
  const [clearToggle, setClearToggle] = useState<boolean>(false);

  const { query } = useRouter();
  const { maker, bodyType } = query;

  const handleCheck = (event: FormEvent<HTMLInputElement>) => {
    const id = getIdFromParam(event.currentTarget.value);

    const newAllData = isYear
      ? allData.map((item) => ({
          ...item,
          isChecked: id === item.id ? true : false,
        }))
      : allData.map((item) =>
          id === item.id
            ? {
                ...item,
                isChecked: !item.isChecked,
              }
            : item
        );

    const newDropdownData = dropdownData.map((item) => ({
      ...item,
      isChecked: newAllData.find((x) => x.id === item.id).isChecked,
    }));

    const selectedData = [];
    const names = [];
    newAllData.forEach((item) => {
      if (item.isChecked) {
        selectedData.push(
          isYear ? item.name : `${item.name.toLowerCase()}-${item.id}`
        );
        names.push(item.name);
      }
    });

    getSelectedData(selectedData);
    setDropdownData(newDropdownData);
    setAllData(newAllData);

    names.length > 0
      ? setSelectedNames(names.length > 1 ? names[0] + '...' : names[0])
      : setSelectedNames(null);
  };

  const handleToggleDropdown = () => {
    if (dropdownState === `${name}Filter`) {
      setDropdownState('');
    } else {
      setDropdownState(`${name}Filter`);
    }
  };

  useEffect(() => {
    if (isSuccess && data) {
      if (resetToggle) {
        setSelectedNames(null);
      }

      const isParamFound = getRequiredParam(name, query);

      const newData = [...data].map((item) => {
        let isChecked = false;
        if (
          (selectedItems.length > 0 &&
            isParamFound &&
            ((isYear && selectedItems.includes(item.name.toLowerCase())) ||
              (!isYear &&
                selectedItems.includes(
                  `${item.name.toLowerCase()}-${item.id}`
                )))) ||
          (selectedItems.length <= 0 &&
            ((name === 'Maker' &&
              maker &&
              !Array.isArray(maker) &&
              isParamFound &&
              item.id === getIdFromParam(maker)) ||
              (name === 'Body Type' &&
                bodyType &&
                !Array.isArray(bodyType) &&
                isParamFound &&
                item.id === getIdFromParam(bodyType))))
        ) {
          isChecked = true;
        }

        return { ...item, isChecked };
      });

      const names = newData.filter((item) => item.isChecked);

      if (names.length > 0) {
        setSelectedNames(
          names.length > 1 ? names[0].name + '...' : names[0].name
        );
      } else {
        setSelectedNames(null);
      }

      const selectedData = [];
      newData.forEach((item) => {
        if (item.isChecked) {
          selectedData.push(
            isYear ? item.name : `${item.name.toLowerCase()}-${item.id}`
          );
        }
      });

      getSelectedData(selectedData);
      setDropdownData(newData);
      setAllData(newData);
    }

    if (clearToggle) {
      const newAllData = allData.map((item) => ({
        ...item,
        isChecked: false,
      }));
      setAllData(newAllData);
      setDropdownData(newAllData);
      setSelectedNames(null);
      setMinYear(1970);
      setClearToggle(false);
    }
  }, [isSuccess, resetToggle, query, clearToggle]);

  const trueCount =
    Array.isArray(allData) && allData.length > 0
      ? allData.reduce(
          (count, item) => (item.isChecked === true ? count + 1 : count),
          0
        )
      : 0;

  return (
    <div className="2xl:w-1/6 lg:w-1/6 md:w-1/2 sm:w-full xs:w-full xxs:w-full px-2 2xl:mb-2 lg:mb-2 md:mb-2 sm:mb-2 xs:mb-2 xxs:mb-2">
      <div className="relative">
        <button
          id={`${name}DropdownButton`}
          onClick={handleToggleDropdown}
          className={`w-full text-${
            trueCount > 0 ? 'red-500' : 'gray-700'
          } bg-white focus:outline-none focus:ring-blue-300 font-medium text-xs px-4 py-2 text-center inline-flex items-center md:p-1 lg:p-1 xl:p-2 2xl:p-2 border`}
          type="button"
        >
          {selectedNames ? selectedNames : name}
          <DropDownIcon />
        </button>

        {dropdownState === `${name}Filter` && (
          <div className="z-10 bg-white rounded-lg shadow 3xl:w-60 2xl:w-60 lg:w-60 md:w-60 sm:w-full xs:w-full xxs:w-full dark:bg-gray-700 absolute">
            <SearchInput
              name={name}
              allData={allData}
              setDropdownData={setDropdownData}
            />

            {name === 'Min Year' && (
              <ClearButton
                name="minYear"
                updateFilters={updateFilters}
                setClearToggle={setClearToggle}
              />
            )}

            <ul
              className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby={`${name}DropdownButton`}
            >
              {isLoading && <Loading />}
              {(!data || isError) && !isLoading && <Error />}

              {isSuccess &&
                dropdownData.map((item) => (
                  <DropdownItem
                    yearType="min"
                    key={item.id}
                    item={item}
                    isYear={isYear}
                    handleCheck={handleCheck}
                  />
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchItem;
