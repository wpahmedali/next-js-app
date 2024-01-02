import { AxiosError, AxiosHeaders } from 'axios';
import fetcher from 'react-query/lib/axios';
import { ICountryApiRes } from 'src/interfaces/country.interface';

export const getCountry = async (): Promise<ICountryApiRes> => {
  try {
    const { data }: { data: ICountryApiRes } = await fetcher({
      url: '/country',
      method: 'GET',
    });
    return data;
  } catch (error) {
    return {
      data: [],
      message: null,
      success: null,
      totalStock: null,
    };
  }
};
