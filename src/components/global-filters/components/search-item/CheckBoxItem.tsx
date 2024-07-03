import React from 'react';
import { useEffect, useState } from 'react';

const CheckBoxItem = ({
  updateFilters,
  resetToggle,
  dropdownState,
  setDropdownState,
  value,
  name,
  lable,
}) => {
  const [searchValue, setSearchValue] = useState<boolean>(
    value ? true : false || false
  );

  const handleCheck = () => {
    setSearchValue(!searchValue);
    updateFilters(!searchValue, name);
    setDropdownState('');
  };

  const handleSearchFocus = () => {
    if (dropdownState) {
      setDropdownState('');
    }
  };

  useEffect(() => {
    if (resetToggle) {
      setSearchValue(false);
    }
    if (value) {
      setSearchValue(true);
      updateFilters(!searchValue, name);
    }
  }, [resetToggle, value]);

  return (
    <div className="flex items-center">
      <input
        id="link-checkbox"
        type="checkbox"
        checked={searchValue}
        onChange={handleCheck}
        onFocus={handleSearchFocus}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2"
      />
      <label className="ms-2 text-sm font-medium text-black">{lable}</label>
    </div>
  );
};

export default CheckBoxItem;
