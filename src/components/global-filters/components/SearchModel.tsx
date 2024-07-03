import { FormEvent, useEffect, useState } from 'react';
import DropdownItem from './search-item/DropdownItem';
import { IDropdownData } from '../interfaces/dropdown-data.interface';
import DropDownIcon from 'components/common/Dropdownicon';
import SearchInput from './search-item/SearchInput';
import { ISearchModel } from '../interfaces/search-model.interface';

const SearchModel = ({
  updateFilters,
  resetToggle,
  models,
  dropdownState,
  setDropdownState,
}: ISearchModel) => {
  const [dropdownData, setDropdownData] = useState<IDropdownData[]>([]);
  const [allData, setAllData] = useState<IDropdownData[]>([]);
  const [selectedNames, setSelectedNames] = useState<string | null>(null);

  useEffect(() => {
    setDropdownData(models);
    setAllData(models);

    const names = models?.filter((x) => x.isChecked);
    setSelectedNames(
      names?.length > 0
        ? names.length > 1
          ? `${names[0].name}...`
          : names[0].name
        : null
    );
  }, [models]);

  const getSelectedData = (data: string[]) => updateFilters(data, 'models');

  const handleCheck = (event: FormEvent<HTMLInputElement>) => {
    const newAllData = allData.map((item) =>
      event.currentTarget.value ===
      `${item.name.replaceAll(' ', '-')}-${item.id}`
        ? { ...item, isChecked: !item.isChecked }
        : item
    );

    const newDropdownData = dropdownData.map((item) => ({
      ...item,
      isChecked: newAllData.find(
        (x) => x.id === item.id && x.name === item.name
      ).isChecked,
    }));

    const selectedData: string[] = [];
    const names: string[] = [];

    newAllData.forEach((item) => {
      if (item.isChecked) {
        selectedData.push(`${item.name.toLowerCase()}-${item.id}`);
        names.push(item.name);
      }
    });

    setSelectedNames(
      names.length > 0 ? (names.length > 1 ? `${names[0]}...` : names[0]) : null
    );
    getSelectedData(selectedData);
    setDropdownData(newDropdownData);
    setAllData(newAllData);
  };

  const handleToggleDropdown = () => {
    if (dropdownState === 'modelFilter') {
      setDropdownState('');
    } else {
      setDropdownState('modelFilter');
    }
  };

  useEffect(() => {
    if (resetToggle) {
      setSelectedNames(null);
    }
  }, [resetToggle]);

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
          id="modelDropdownButton"
          onClick={handleToggleDropdown}
          className={`w-full text-${
            trueCount > 0 ? 'red-500' : 'gray-700'
          } bg-white focus:outline-none focus:ring-blue-300 font-medium text-xs px-4 py-2 text-center inline-flex items-center md:p-1 lg:p-1 xl:p-2 2xl:p-2 border`}
          type="button"
        >
          {selectedNames || 'Model'}
          <DropDownIcon />
        </button>

        {dropdownState === 'modelFilter' && (
          <div className="z-10 bg-white rounded-lg shadow 3xl:w-60 2xl:w-60 lg:w-60 md:w-60 sm:w-full xs:w-full xxs:w-full absolute">
            <SearchInput
              name="Model"
              allData={allData}
              setDropdownData={setDropdownData}
            />

            <ul
              className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700"
              aria-labelledby="modelDropdownButton"
            >
              {dropdownData.map((item) => (
                <DropdownItem
                  key={`${item.name}${item.id}`}
                  item={item}
                  isYear={false}
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

export default SearchModel;
