import fetcher from 'react-query/lib/axios';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { IChangePassword } from 'src/interfaces/change-password.interface';

export const ChangePassword = async (formValues: {
  old_password: string;
  new_password: string;
  new_password_confirmation: string;
}): Promise<IApiResponse<IChangePassword>> => {
  try {
    const { data }: { data: IApiResponse<IChangePassword> } = await fetcher({
      url: '/changePassword',
      method: 'POST',
      data: formValues,
    });

    return data;
  } catch (error) {
    return error;
  }
};
