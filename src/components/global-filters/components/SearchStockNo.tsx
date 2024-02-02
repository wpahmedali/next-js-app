import SearchIcon from 'components/common/Searchicon';
import { NextRouter, useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const SearchStockNo = ({
  handleOnKeyDown,
  updateFilters,
  resetToggle,
  dropdownState,
  setDropdownState,
}) => {
  const router: NextRouter = useRouter();

  const {
    query: { stock_no },
  } = router;

  const [searchStock, setSearchStock] = useState(stock_no || '');

  const handleSearchText = (e) => {
    const value = e.currentTarget.value;
    setSearchStock(value);
    updateFilters(value, 'stockNo');
    setDropdownState('');
  };

  const handleSearchFocus = () => {
    if (dropdownState) {
      setDropdownState('');
    }
  };

  useEffect(() => {
    if (resetToggle || !stock_no) {
      setSearchStock('');
    }
  }, [resetToggle, stock_no]);

  return (
    <div className="2xl:w-1/6 lg:w-1/6 md:w-1/2 sm:w-full xs:w-full xxs:w-full px-2 place-items-center 2xl:mb-0 lg:mb-2 md:mb-2 sm:mb-2 xs:mb-2 xxs:mb-2">
      <div className="flex w-full h-8 focus-within:shadow-lg bg-white overflow-hidden border rounded-sm">
        <div className="grid place-items-center h-full w-* ml-2">
          <SearchIcon />
        </div>
        <input
          className="peer h-full w-full outline-none text-xs text-black pr-2"
          type="text"
          value={searchStock}
          onFocus={handleSearchFocus}
          onChange={handleSearchText}
          onKeyDown={() => handleOnKeyDown()}
          placeholder="Stock No"
        />
      </div>
    </div>
  );
};

export default SearchStockNo;
