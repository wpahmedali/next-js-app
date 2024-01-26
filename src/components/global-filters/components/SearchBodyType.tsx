import { useRouter } from 'next/router';
import { useBodyType } from 'react-query/hooks/api/body-type';
import { IDropdownData } from '../interfaces/dropdown-data.interface';
import SearchItem from './search-item';
import { useRouterParams } from 'src/hooks/router-params';

const SearchBodyType = ({
  updateFilters,
  resetToggle,
  dropdownState,
  setDropdownState,
}): JSX.Element => {
  const router = useRouter();
  const params = useRouterParams(router.query);

  const {
    query: { body_types },
  } = router;

  const bodyTypeIdArr =
    body_types && !Array.isArray(body_types) ? body_types.split(',') : [];

  const { data, isLoading, isError, isSuccess } = useBodyType(
    params.countryId,
    params.auctionId
  );

  let dropdownData: IDropdownData[] = [];

  if (isSuccess) {
    dropdownData =
      data?.data?.map((item) => ({
        id: item.bodyTypeId,
        name: item.bodyTypeName,
        isChecked: false,
      })) || [];
  }

  const getSelectedData = (data: string[]) => updateFilters(data, 'bodyTypes');

  return (
    <SearchItem
      name="Body Type"
      isYear={false}
      resetToggle={resetToggle}
      getSelectedData={getSelectedData}
      selectedItems={bodyTypeIdArr}
      data={dropdownData}
      isError={!data || isError}
      isLoading={isLoading}
      isSuccess={isSuccess}
      dropdownState={dropdownState}
      setDropdownState={setDropdownState}
    />
  );
};

export default SearchBodyType;
