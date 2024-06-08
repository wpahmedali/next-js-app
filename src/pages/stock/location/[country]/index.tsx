import { dehydrate, QueryClient } from 'react-query';
import { withCSR } from 'react-query/hoc/with-CSR';
import { getIdFromParam } from 'utils/get-id-from-param';
import { useRouter } from 'next/router';
import GlobalContactDetail from 'components/global-contact-detail';
import { getGlobalContactDetail } from 'react-query/api/global-contact-detail';

export const getServerSideProps = withCSR(async (ctx) => {
  let queryClient = new QueryClient();

  const { country, contact } = ctx.query;

  if (contact && contact === 'true') {
    const countryId =
      country && !Array.isArray(country) ? getIdFromParam(country) : 0;
    await queryClient.prefetchQuery(['contactUsByCountry', countryId], () =>
      getGlobalContactDetail(countryId)
    );
  }

  if (contact) {
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } else {
    return {
      redirect: {
        destination: ctx.req.url + '/1',
        permanent: false,
      },
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  }
});

const Page = () => {
  const {
    query: { contact },
  } = useRouter();

  return contact ? <GlobalContactDetail /> : '';
};

export default Page;
