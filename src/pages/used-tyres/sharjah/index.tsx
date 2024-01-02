import { QueryClient, dehydrate } from 'react-query';
import { withCSR } from 'react-query/hoc/with-CSR';
import { sharjahCountry } from 'components/tyre-dashboard/common/constants';
import SharjahTyresLayout from 'components/tyre-dashboard/sharjah/layout';
import { getTyreSharjah } from 'react-query/api/tyres/sharjah/tyre';

export const getServerSideProps = withCSR(async () => {
  let queryClient = new QueryClient();

  const countryId = sharjahCountry.id;

  await queryClient.prefetchQuery(['tyreSharjah', countryId], () =>
    getTyreSharjah(countryId)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
});

const Tyres = (): JSX.Element => {
  return <></>;
};

export default Tyres;

Tyres.getLayout = function getLayout(page) {
  return <SharjahTyresLayout>{page}</SharjahTyresLayout>;
};
