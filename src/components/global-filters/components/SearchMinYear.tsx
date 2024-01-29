import { useRouter } from 'next/router';
import { IDropdownData } from '../interfaces/dropdown-data.interface';
import SearchItem from './search-item';

const SearchMinYear = ({
  changeMinYear,
  updateFilters,
  resetToggle,
  setMinYear,
  dropdownState,
  setDropdownState,
}) => {
  const router = useRouter();

  const {
    query: { from_year },
  } = router;

  const minYearArray = typeof from_year === 'string' ? [from_year] : [];

  const dropdownData: IDropdownData[] = [];

  for (let year = new Date().getFullYear(); year > 1970; year--) {
    dropdownData.push({ id: year, name: String(year), isChecked: false });
  }

  const getSelectedData = (selectedData: string[]) => {
    if (selectedData.length > 0) {
      changeMinYear(selectedData[0]);
    }
    updateFilters(selectedData, 'minYear');
  };

  return (
    <SearchItem
      name="Min Year"
      isYear={true}
      resetToggle={resetToggle}
      getSelectedData={getSelectedData}
      selectedItems={minYearArray}
      data={dropdownData}
      isError={false}
      isLoading={false}
      isSuccess={true}
      updateFilters={updateFilters}
      setMinYear={setMinYear}
      dropdownState={dropdownState}
      setDropdownState={setDropdownState}
    />
  );
};

export default SearchMinYear;
