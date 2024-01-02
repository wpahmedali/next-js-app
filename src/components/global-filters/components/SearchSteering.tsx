import { useRouter } from 'next/router';
import { useSteeringTransFuel } from 'react-query/hooks/api/steering-trans-fuel';
import { IDropdownData } from '../interfaces/dropdown-data.interface';
import SearchItem from './search-item';
import { ISearchSteering } from '../interfaces/search-steering.interface';

const SearchSteering = ({ updateFilters, resetToggle }: ISearchSteering) => {
  const {
    query: { steerings },
  } = useRouter();
  const steeringIdArr =
    steerings && !Array.isArray(steerings) ? steerings.split(',') : [];

  const { data, isLoading, isError, isSuccess } = useSteeringTransFuel();

  let dropdownData: IDropdownData[] = [];

  if (isSuccess && data) {
    dropdownData = data.data.steering.map((item) => ({
      id: item.steeringId,
      name: item.steeringName,
      isChecked: false,
    }));
  }

  const getSelectedData = (data: string[]) => updateFilters(data, 'steerings');

  return (
    <SearchItem
      name="Steering"
      isYear={false}
      resetToggle={resetToggle}
      getSelectedData={getSelectedData}
      selectedItems={steeringIdArr}
      data={dropdownData}
      isError={!data || isError}
      isLoading={isLoading}
      isSuccess={isSuccess}
    />
  );
};

export default SearchSteering;
