import fetcher from 'react-query/lib/axios';
import { IApiResponseWithoutData } from 'src/interfaces/api-response.interface';

export const ResetPasswordApi = async (formValues: {
  username: string;
  password: string;
  otp: string;
}): Promise<IApiResponseWithoutData> => {
  try {
    const { data }: { data: IApiResponseWithoutData } = await fetcher({
      url: '/resetForgotPassword',
      method: 'POST',
      data: formValues,
    });

    return data;
  } catch (error) {
    return error;
  }
};
