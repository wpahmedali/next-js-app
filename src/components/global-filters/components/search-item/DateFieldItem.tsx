import React from 'react';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

const DateFieldItem = ({
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

  const handleSearchText = (date: any) => {
    const formattedDate = format(date, 'MM/dd/yyyy');
    setSearchValue(formattedDate);
    updateFilters(formattedDate, name);
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
        <DatePicker
          selected={searchValue}
          dateFormat="MM/dd/yyyy"
          onChange={handleSearchText}
          onFocus={handleSearchFocus}
          placeholderText={placeholder}
          onKeyDown={(e) => e.keyCode === 13 && handleOnKeyDown()}
          className=" ml-2 peer h-full w-full outline-none text-xs text-black pr-2"
        />
      </div>
    </div>
  );
};

export default DateFieldItem;
