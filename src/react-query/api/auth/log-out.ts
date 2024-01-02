import fetcher from 'react-query/lib/axios';

export const LogOut = async () => {
  try {
    const { data } = await fetcher({
      url: '/logout',
      method: 'GET',
    });

    return data;
  } catch (error) {
    return null;
  }
};
