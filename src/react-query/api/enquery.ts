import { IEnquriryParamData } from 'components/vehicle-detail/components/enquiry/interfaces/enquiry-param-data.interface';
import fetcher from 'react-query/lib/axios';

export const createEnquery = async (
  enqueryData: IEnquriryParamData
): Promise<any> => {
  try {
    const { data }: { data: any } = await fetcher({
      url: '/enquiryCar',
      method: 'POST',
      data: enqueryData,
    });

    return data;
  } catch (error) {
    return null;
  }
};
