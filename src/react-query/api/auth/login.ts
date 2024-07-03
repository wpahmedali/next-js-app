import axios from 'axios';
import https from 'https';
import { access_token } from 'src/common/constants';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IAuthResponse } from 'src/interfaces/auth/auth-response.interface';

const fetcher = axios.create({
  baseURL: 'https://jjbackups.com/api',
  httpsAgent: new https.Agent({ rejectUnauthorized: false }),
  responseType: 'json',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    token: access_token,
  },
});

export const login = async (formData: {
  username: string;
  password: string;
}): Promise<IApiResponse<IAuthResponse | null>> => {
  try {
    const formattedData = new URLSearchParams();
    formattedData.append('username', formData.username);
    formattedData.append('password', formData.password);

    const { data }: { data: IApiResponse<IAuthResponse> } = await fetcher({
      url: '/login',
      method: 'POST',
      data: formattedData,
    });

    return data;
  } catch (error) {
    return error;
  }
};
