import { QueryClient } from 'react-query';
import { withCSR } from 'react-query/hoc/with-CSR';
import { sharjahCountry } from 'components/tyre-dashboard/common/constants';
import SharjahTyresLayout from 'components/tyre-dashboard/sharjah/layout';
import SoldAuctionListing from 'components/tyre-dashboard/sharjah/components/sold';
import { getTyreSharjah } from 'react-query/api/tyres/sharjah/tyre';
import { getSoldTyreList } from 'react-query/api/tyres/sharjah/sold-tyre-list';
import { siteSettings } from 'utils/siteSetting';
import { getDefaultProps, redirectToHome } from 'utils/return-functions';

export const getServerSideProps = withCSR(async (ctx) => {
  let queryClient = new QueryClient();
  const { auctionId, page } = ctx.query;

  const countryId = sharjahCountry.id;
  const pageNo = page && !Array.isArray(page) ? Number(page) : null;
  const tyreAuctionId =
    auctionId && !Array.isArray(auctionId) ? Number(auctionId) : null;

  await queryClient.prefetchQuery(['tyreSharjah', countryId], () =>
    getTyreSharjah(countryId)
  );

  await queryClient.prefetchQuery(
    ['soldTyreList', countryId, page, tyreAuctionId],
    () => getSoldTyreList(countryId, pageNo, tyreAuctionId)
  );

  const { defaultCountryShown } = siteSettings;

  if (defaultCountryShown) {
    return redirectToHome(queryClient);
  } else {
    return getDefaultProps(queryClient);
  }
});

const Tyres = (): JSX.Element => {
  return (
    <>
      <SoldAuctionListing />
    </>
  );
};

export default Tyres;

Tyres.getLayout = function getLayout(page) {
  return <SharjahTyresLayout>{page}</SharjahTyresLayout>;
};
