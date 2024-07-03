import fetcher from 'react-query/lib/axios';
import { IApiResponseWithoutData } from 'src/interfaces/api-response.interface';

export const ValidateForgotPassword = async (formValues: {
  username: string;
  otp: string;
}): Promise<IApiResponseWithoutData> => {
  try {
    const { data }: { data: IApiResponseWithoutData } = await fetcher({
      url: '/optValidateForgotPassword',
      method: 'POST',
      data: formValues,
    });

    return data;
  } catch (error) {
    return error;
  }
};
