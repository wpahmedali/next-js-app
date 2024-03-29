import { QueryClient, dehydrate } from 'react-query';
import { withCSR } from 'react-query/hoc/with-CSR';
import { sharjahCountry } from 'components/tyre-dashboard/common/constants';
import SharjahTyresLayout from 'components/tyre-dashboard/sharjah/layout';
import SoldAuctionListing from 'components/tyre-dashboard/sharjah/components/sold';
import { getTyreSharjah } from 'react-query/api/tyres/sharjah/tyre';
import { getSoldTyreList } from 'react-query/api/tyres/sharjah/sold-tyre-list';

export const getServerSideProps = withCSR(async (ctx) => {
  let queryClient = new QueryClient();
  const { auctionId } = ctx.query;

  const countryId = sharjahCountry.id;
  const page = 1;
  const tyreAuctionId =
    auctionId && !Array.isArray(auctionId) ? Number(auctionId) : null;

  await queryClient.prefetchQuery(['tyreSharjah', countryId], () =>
    getTyreSharjah(countryId)
  );

  await queryClient.prefetchQuery(
    ['soldTyreList', countryId, page, tyreAuctionId],
    () => getSoldTyreList(countryId, page, tyreAuctionId)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
});

const Tyres = (): JSX.Element => {
  return <SoldAuctionListing />;
};

export default Tyres;

Tyres.getLayout = function getLayout(page) {
  return <SharjahTyresLayout>{page}</SharjahTyresLayout>;
};
