import { dehydrate } from 'react-query';

export const redirectToHome = (queryClient) => {
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const getDefaultProps = (queryClient) => {
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
