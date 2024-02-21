import React, { useState } from 'react';
import Error from 'components/error';
import Loading from 'components/loading';
import { useCountry } from 'react-query/hooks/api/country';
import { IInputField } from '../interfaces/input-field.interface';

const DropdownItem = ({
  placeholder,
  name,
  value,
  onChangeHandler,
  error,
}: IInputField): JSX.Element => {
  const { data, isLoading, isError, isSuccess } = useCountry();
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredCountries =
    isSuccess && data
      ? data.data.filter((country) =>
          country.countryName.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectCountry = (countryName: string) => {
    const country = data?.data?.find(
      (country) =>
        country.countryName.toLowerCase() === countryName.toLowerCase()
    );
    onChangeHandler(country.countryName);
    setSearchTerm(country.countryName);
    setIsOpen(false);
  };

  return (
    <div className="col-span-full w-full">
      <div className="mt-2">
        <div className="relative">
          <input
            type="text"
            placeholder={placeholder}
            value={searchTerm}
            onClick={toggleDropdown}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              handleSelectCountry(e.target.value);
            }}
            className="block w-full rounded-md border-0 py-3 px-3 text-gray-400 bg-white shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          {isOpen && (
            <ul className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg border border-gray-300 max-h-60 overflow-y-auto">
              {filteredCountries.map((country) => (
                <li
                  key={country.id}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSelectCountry(country.countryName)}
                >
                  {country.countryName}
                </li>
              ))}
            </ul>
          )}
          {isLoading && <Loading />}
          {isError && <Error />}
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default DropdownItem;
