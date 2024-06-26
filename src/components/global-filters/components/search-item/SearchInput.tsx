import { SearchIcon } from 'icons';
import React, { FormEvent, useState } from 'react';

const SearchInput = ({ name, allData, setDropdownData }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchText = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setSearchText(value);
    if (value.length === 0) {
      setDropdownData(allData);
      return;
    }
    const newData = [...allData].filter((item) =>
      item.name.toUpperCase().match(value.toUpperCase())
    );
    setDropdownData(newData);
  };

  return (
    <div className="p-3">
      <label
        htmlFor={`input-group-search${name.replace(' ', '-')}`}
        className="sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon />
        </div>
        <input
          type="text"
          id={`input-group-search${name}`}
          value={searchText}
          onChange={handleSearchText}
          className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder={`Search ${name}`}
        />
      </div>
    </div>
  );
};

export default SearchInput;
