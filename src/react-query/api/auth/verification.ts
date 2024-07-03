import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IAuthResponse } from 'src/interfaces/auth/auth-response.interface';

export const verifyUser = async (formValues: {
  otp: string;
  user_id: string;
}): Promise<IApiResponse<IAuthResponse>> => {
  try {
    const { data }: { data: IApiResponse<IAuthResponse> } = await fetcher({
      url: '/verifyOtp',
      method: 'POST',
      data: formValues,
    });

    return data;
  } catch (error) {
    return error;
  }
};
