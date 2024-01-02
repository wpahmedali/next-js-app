import { QueryClient, dehydrate } from 'react-query';
import { withCSR } from 'react-query/hoc/with-CSR';
import { sharjahCountry } from 'components/tyre-dashboard/common/constants';
import SharjahTyresLayout from 'components/tyre-dashboard/sharjah/layout';
import AvailableAuctions from 'components/tyre-dashboard/sharjah/components/available';
import { getTyreSharjah } from 'react-query/api/tyres/sharjah/tyre';
import { getAvailableTyreList } from 'react-query/api/tyres/sharjah/available-tyre-list';

export const getServerSideProps = withCSR(async (ctx) => {
  let queryClient = new QueryClient();
  const { auctionId } = ctx.query;

  const countryId = sharjahCountry.id;
  const tyreAuctionId =
    auctionId && !Array.isArray(auctionId) ? Number(auctionId) : null;

  const tyreSharjah = await queryClient.prefetchQuery(
    ['tyreSharjah', countryId],
    () => getTyreSharjah(countryId)
  );

  if (tyreSharjah != null) {
    const { data, success } = await getTyreSharjah(countryId);

    if (success) {
      const availabledate = data.incommingtAuctionDate.find(
        (x) => x.id === Number(tyreAuctionId)
      );
      const auctionDate = availabledate.date;

      await queryClient.prefetchQuery(
        ['availableTyreList', countryId, auctionId, auctionDate],
        () => getAvailableTyreList(countryId, tyreAuctionId, auctionDate)
      );
    }
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
});

const Tyres = (): JSX.Element => {
  return <AvailableAuctions />;
};

export default Tyres;

Tyres.getLayout = function getLayout(page) {
  return <SharjahTyresLayout>{page}</SharjahTyresLayout>;
};
