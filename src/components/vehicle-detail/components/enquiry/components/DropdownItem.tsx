import Error from 'components/error';
import Loading from 'components/loading';
import React from 'react';
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

  return (
    <div className="col-span-full w-full">
      <div className="mt-2">
        <select
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChangeHandler}
          autoComplete={name}
          className="block w-full rounded-md border-0 py-3 px-3 text-gray-400 bg-white shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
          <option className="text-gray-800">Select Country</option>
          {isLoading && <Loading />}
          {(!data || isError) && !isLoading && <Error />}
          {isSuccess &&
            data?.data?.map((country) => (
              <option
                className="text-gray-800"
                value={country.countryName}
                key={country.id}
              >
                {country.countryName}
              </option>
            ))}
        </select>
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default DropdownItem;
