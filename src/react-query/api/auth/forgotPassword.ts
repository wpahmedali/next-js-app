import fetcher from 'react-query/lib/axios';
import { IApiResponseWithoutData } from 'src/interfaces/api-response.interface';

export const ForgotPassword = async (formValues: {
  username: string;
}): Promise<IApiResponseWithoutData> => {
  try {
    const { data }: { data: IApiResponseWithoutData } = await fetcher({
      url: '/forgotPassword',
      method: 'POST',
      data: formValues,
    });

    return data;
  } catch (error) {
    return error;
  }
};
