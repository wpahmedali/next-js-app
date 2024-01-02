// import { dehydrate, QueryClient } from 'react-query';
// import { callReactQueryApis } from 'utils/call-react-query-apis';
// import Listings from 'components/listings';
// import { withCSR } from 'react-query/hoc/with-CSR';
// import { useServerRouterParams } from 'src/hooks/server-router-params';

// // export const getServerSideProps = withCSR(async (ctx) => {
// //   let queryClient = new QueryClient();

// //   const params = await useServerRouterParams(ctx.query);

// //   queryClient = await callReactQueryApis(queryClient, params);

// //   return {
// //     props: {
// //       dehydratedState: dehydrate(queryClient),
// //     },
// //   };
// // });

// const Home = () => {
//   return <Listings />;
// };

// export default Home;

import { QueryClient, dehydrate } from 'react-query';
import { withCSR } from 'react-query/hoc/with-CSR';
import { callReactQueryForTyreApis } from 'utils/call-react-query-apis-tyre';
import TyreListing from 'components/tyre-dashboard/zambia/listings';
import TyresLayout from 'components/tyre-dashboard/zambia/tyre-layout';
import { zambiaCountry } from 'components/tyre-dashboard/common/constants';

export const getServerSideProps = withCSR(async (ctx: any) => {
  let queryClient = new QueryClient();

  const { tyreSize, category, keyword, page } = ctx.query;
  const countryId = zambiaCountry.id;
  const tyreSizeId =
    tyreSize && !Array.isArray(tyreSize) ? Number(tyreSize) : null;
  const categoryId =
    category && !Array.isArray(category) ? Number(category) : null;
  const keyWord = keyword && !Array.isArray(keyword) ? keyword : null;
  const pageNo = page && !Array.isArray(page) ? page : 1;
  const perpage = 5;

  queryClient = await callReactQueryForTyreApis(
    queryClient,
    countryId,
    pageNo,
    categoryId,
    tyreSizeId,
    keyWord,
    perpage
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
});
const Tyres = (): JSX.Element => {
  return <TyreListing />;
};

export default Tyres;

Tyres.getLayout = function getLayout(page) {
  return <TyresLayout>{page}</TyresLayout>;
};
