import { useQuery } from 'react-query';
import { getCountry } from 'react-query/api/country';
import { ICountryApiRes } from 'src/interfaces/country.interface';

export const useCountry = () =>
  useQuery<ICountryApiRes, Error>(['country'], getCountry);
