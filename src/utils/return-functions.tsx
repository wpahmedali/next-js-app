import { dehydrate } from 'react-query';
import { ROUTES } from 'src/common/routes';
import { ICountry } from 'src/interfaces/country.interface';
const data: ICountry[] = require('../../public/countries.json');

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

export const redirectToCountry = (queryClient, query) => {
  const country = data?.find(
    (item) => item?.countryName?.toLowerCase() === query?.country?.toLowerCase()
  );

  let url: string;

  if (country) {
    url = `/used-car/${country.countryName.toLowerCase()}-${country.id}/${
      query.maker
    }/${query.model}/${query.carId}`;
  } else {
    url = `${ROUTES.ALL_STOCK}/1`;
  }

  return {
    redirect: {
      destination: url,
      permanent: false,
    },
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
