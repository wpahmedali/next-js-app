import { useRouter } from 'next/router';
import { useSteeringTransFuel } from 'react-query/hooks/api/steering-trans-fuel';
import SearchItem from './search-item';
import { IDropdownData } from '../interfaces/dropdown-data.interface';
import { ISearchFuel } from '../interfaces/search-fuel.interface';

const SearchFuel = ({
  updateFilters,
  resetToggle,
  dropdownState,
  setDropdownState,
}: ISearchFuel) => {
  const {
    query: { fuels },
  } = useRouter();
  const fuelIdArr = fuels && !Array.isArray(fuels) ? fuels.split(',') : [];

  const { data, isLoading, isError, isSuccess } = useSteeringTransFuel();

  let dropdownData: IDropdownData[] = [];

  if (isSuccess && data) {
    dropdownData = data.data?.fuel.map((item) => ({
      id: item.fuelId,
      name: item.fuelName,
      isChecked: false,
    }));
  }

  const getSelectedData = (data: string[]) => updateFilters(data, 'fuel');

  return (
    <SearchItem
      name="Fuel"
      isYear={false}
      resetToggle={resetToggle}
      getSelectedData={getSelectedData}
      selectedItems={fuelIdArr}
      data={dropdownData}
      isError={!data || isError}
      isLoading={isLoading}
      isSuccess={isSuccess}
      dropdownState={dropdownState}
      setDropdownState={setDropdownState}
    />
  );
};

export default SearchFuel;
