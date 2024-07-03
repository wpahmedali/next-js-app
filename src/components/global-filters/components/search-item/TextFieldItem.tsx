import SearchIcon from 'components/common/Searchicon';
import { useEffect, useState } from 'react';

const TextFieldItem = ({
  handleOnKeyDown,
  updateFilters,
  resetToggle,
  dropdownState,
  setDropdownState,
  value,
  name,
  placeholder,
}) => {
  const [searchValue, setSearchValue] = useState(value || '');

  const handleSearchText = (e) => {
    const value = e.currentTarget.value;
    setSearchValue(value);
    updateFilters(value, name);
    setDropdownState('');
  };

  const handleSearchFocus = () => {
    if (dropdownState) {
      setDropdownState('');
    }
  };

  useEffect(() => {
    if (resetToggle || !value) {
      setSearchValue('');
    }
    if (value) {
      setSearchValue(value);
      updateFilters(value, name);
    }
  }, [resetToggle, value]);

  return (
    <div className="w-full px-2 place-items-center 2xl:mb-2 lg:mb-2 md:mb-2 sm:mb-2 xs:mb-2 xxs:mb-2">
      <div className="flex w-full h-8 focus-within:shadow-lg bg-white overflow-hidden border rounded-md">
        <div className="grid place-items-center h-full w-* ml-2">
          <SearchIcon />
        </div>
        <input
          className="peer h-full w-full outline-none text-xs text-black pr-2"
          type="text"
          value={searchValue}
          onFocus={handleSearchFocus}
          onChange={handleSearchText}
          onKeyDown={(e) => e.keyCode === 13 && handleOnKeyDown()}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default TextFieldItem;
