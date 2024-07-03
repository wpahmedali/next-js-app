import { ISearchByChassissNumber } from 'components/customer-review/detail-page/interfaces/chassis-no.interface';
import fetcher from 'react-query/lib/axios';

export const SearchByChassissNumber = async (
  searchData: ISearchByChassissNumber
): Promise<any> => {
  try {
    const { data }: { data: any } = await fetcher({
      url: '/searchByChassissNumber',
      method: 'POST',
      data: searchData,
    });

    return data;
  } catch (error) {
    return null;
  }
};
