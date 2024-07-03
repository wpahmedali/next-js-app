import fetcher from 'react-query/lib/axios';

export interface IApiResponse {
  success: boolean;
  message: string;
}

export const logout = async (): Promise<IApiResponse> => {
  const url = '/logout';

  try {
    const { data }: { data: IApiResponse } = await fetcher({
      url: url,
      method: 'GET',
    });

    return data;
  } catch (error) {
    return null;
  }
};
