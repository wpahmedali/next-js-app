import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/router';
import DropdownItem from './search-item/DropdownItem';
import SearchInput from './search-item/SearchInput';
import DropDownIcon from 'components/common/Dropdownicon';
import { getIdFromParam } from 'utils/get-id-from-param';
import ClearButton from './search-item/ClearButton';
import { IDropdownData } from '../interfaces/dropdown-data.interface';

const SearchMaxYear = ({
  minYear,
  updateFilters,
  resetToggle,
  dropdownState,
  setDropdownState,
}) => {
  const [clearToggle, setClearToggle] = useState(false);
  const [dropdownData, setDropdownData] = useState<IDropdownData[]>([]);
  const [allData, setAllData] = useState<IDropdownData[]>([]);
  const [selectedYear, setSelectedYear] = useState<string>(null);

  const router = useRouter();

  useEffect(() => {
    const initializeData = () => {
      const maxYearData: IDropdownData[] = [];
      const currentYear = new Date().getFullYear();

      for (let i = minYear; i <= currentYear; i++) {
        maxYearData.push({
          id: i,
          name: String(i),
          isChecked: String(i) === router.query.to_year,
        });
      }

      const toYear = router.query.to_year;
      setSelectedYear(toYear && !Array.isArray(toYear) ? toYear : null);

      setAllData(maxYearData);
      setDropdownData(maxYearData);

      if (resetToggle) {
        setSelectedYear(null);
      }
    };

    initializeData();
  }, [router.query.to_year, minYear, resetToggle]);

  useEffect(() => {
    const resetDropdownData = () => {
      if (clearToggle) {
        const maxYearData: IDropdownData[] = [];

        for (let i = minYear; i <= new Date().getFullYear(); i++) {
          maxYearData.push({
            id: i,
            name: String(i),
            isChecked: false,
          });
        }

        setAllData(maxYearData);
        setDropdownData(maxYearData);
        setSelectedYear(null);
        setClearToggle(false);
      }
    };

    resetDropdownData();
  }, [clearToggle]);

  const handleCheck = (event: FormEvent<HTMLInputElement>) => {
    const id = getIdFromParam(event.currentTarget.value);

    const newAllData = allData.map((item) => ({
      ...item,
      isChecked: id === item.id ? true : false,
    }));

    const newDropdownData = dropdownData.map((item) => ({
      ...item,
      isChecked: newAllData.find((x) => x.id === item.id).isChecked,
    }));

    const selectedData = newAllData
      .filter((item) => item.isChecked)
      .map((item) => item.name);
    setSelectedYear(selectedData.length > 0 ? selectedData[0] : null);

    updateFilters(selectedData, 'maxYear');
    setDropdownData(newDropdownData);
    setAllData(newAllData);
  };

  const handleToggleDropdown = () => {
    if (dropdownState === 'MaxYearFilter') {
      setDropdownState('');
    } else {
      setDropdownState('MaxYearFilter');
    }
  };

  const trueCount =
    Array.isArray(allData) && allData.length > 0
      ? allData.filter((item) => item.isChecked).length
      : 0;

  return (
    <div className="2xl:w-1/6 lg:w-1/6 md:w-1/2 sm:w-full xs:w-full xxs:w-full px-2 2xl:mb-2 lg:mb-2 md:mb-2 sm:mb-2 xs:mb-2 xxs:mb-2">
      <div className="relative">
        <button
          id="MaxYearDropdownButton"
          onClick={handleToggleDropdown}
          className={`w-full text-${
            trueCount > 0 ? 'red-500' : 'gray-700'
          } bg-white focus:outline-none focus:ring-blue-300 font-medium text-xs px-4 py-2 text-center inline-flex items-center md:p-1 lg:p-1 xl:p-2 2xl:p-2 border`}
          type="button"
        >
          {selectedYear || 'Max Year'}
          <DropDownIcon />
        </button>

        {dropdownState === 'MaxYearFilter' && (
          <div className="z-10 bg-white rounded-lg shadow 3xl:w-60 2xl:w-60 lg:w-60 md:w-60 sm:w-full xs:w-full xxs:w-full absolute">
            <SearchInput
              name="Max Year"
              allData={allData}
              setDropdownData={setDropdownData}
            />

            <ClearButton
              name="maxYear"
              updateFilters={updateFilters}
              setClearToggle={setClearToggle}
            />

            <ul
              className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700"
              aria-labelledby="MaxYearDropdownButton"
            >
              {dropdownData.map((item) => (
                <DropdownItem
                  key={item.id}
                  item={item}
                  yearType="max"
                  isYear={true}
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

export default SearchMaxYear;
