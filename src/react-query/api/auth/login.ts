import { ILoginParamData } from 'components/menu/components/menu-top-nav/interfaces/login-param-data.interface';
import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IAuthResponse } from 'src/interfaces/auth/auth-response.interface';

export const login = async (
  loginData: ILoginParamData
): Promise<IApiResponse<IAuthResponse | null>> => {
  try {
    const { data }: { data: IApiResponse<IAuthResponse> } = await fetcher({
      url: '/login',
      method: 'POST',
      data: loginData,
    });

    return data;
  } catch (error) {
    return null;
  }
};
