import { ISignupParamData } from 'components/menu/components/menu-top-nav/interfaces/signup-param-data.interface';
import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IAuthResponse } from 'src/interfaces/auth/auth-response.interface';

export const signUp = async (
  signUpData: ISignupParamData
): Promise<IApiResponse<IAuthResponse | null>> => {
  try {
    const { data }: { data: IApiResponse<IAuthResponse> } = await fetcher({
      url: '/register',
      method: 'POST',
      data: signUpData,
    });

    return data;
  } catch (error) {
    return null;
  }
};
