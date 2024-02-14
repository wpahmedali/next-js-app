import { useRouter } from 'next/router';
import { useSteeringTransFuel } from 'react-query/hooks/api/steering-trans-fuel';
import SearchItem from './search-item';
import { IDropdownData } from '../interfaces/dropdown-data.interface';
import { ISearchTransmission } from '../interfaces/search-transmission.interface';

const SearchTransmission = ({
  updateFilters,
  resetToggle,
  dropdownState,
  setDropdownState,
}: ISearchTransmission) => {
  const {
    query: { transmissions },
  } = useRouter();
  const transIdArr =
    transmissions && !Array.isArray(transmissions)
      ? transmissions.split(',')
      : [];

  const { data, isLoading, isError, isSuccess } = useSteeringTransFuel();

  let dropdownData: IDropdownData[] = [];

  if (isSuccess && data) {
    dropdownData = data.data?.transmission.map((item) => ({
      id: item.transmissionId,
      name: item.transmissionName,
      isChecked: false,
    }));
  }

  const getSelectedData = (data: string[]) => updateFilters(data, 'trans');

  return (
    <SearchItem
      name="Trans"
      isYear={false}
      resetToggle={resetToggle}
      getSelectedData={getSelectedData}
      selectedItems={transIdArr}
      data={dropdownData}
      isError={!data || isError}
      isLoading={isLoading}
      isSuccess={isSuccess}
      dropdownState={dropdownState}
      setDropdownState={setDropdownState}
    />
  );
};

export default SearchTransmission;
