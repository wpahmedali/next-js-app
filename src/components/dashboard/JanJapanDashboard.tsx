import FullLayout from 'components/dashboard/FullLayout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import { useVehicleDetail } from 'react-query/hooks/api/vehicle-detail';
import { metaKeywords } from 'src/common/constants';
import { useDynamicMetaData } from 'src/hooks/dynamic-meta-data';
import { getIdFromParam } from 'utils/get-id-from-param';

const JanJapanDashboard = ({ pageProps, Component }) => {
  const getLayout = Component.getLayout;

  const router = useRouter();
  const [scrollPositions, setScrollPositions] = useState({});

  const handleRouteChangeStart = () => {
    const { pathname } = router;
    setScrollPositions((prevPositions) => ({
      ...prevPositions,
      [pathname]: window.scrollY,
    }));
  };

  const handleRouteChangeComplete = () => {
    const { pathname } = router;
    if (scrollPositions[pathname] !== undefined) {
      window.scrollTo(0, scrollPositions[pathname]);
    } else {
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router, scrollPositions]);

  const { data } = useVehicleDetail(
    router.query.country &&
      !Array.isArray(router.query.country) &&
      getIdFromParam(router.query.country),
    +router.query.carId
  );
  const dynamicMetaData = useDynamicMetaData(router, data?.data);

  return (
    <Fragment>
      <Head>
        <title>{dynamicMetaData?.title || "Jan's Group"}</title>
        {dynamicMetaData?.description && (
          <meta name="description" content={dynamicMetaData.description} />
        )}
        {dynamicMetaData?.vehicleData?.map((item, i) => (
          <meta
            property={item.property}
            content={item.content.toString()}
            key={i}
          />
        ))}
        <meta name="keywords" content={metaKeywords} />
      </Head>
      {Component.getLayout ? (
        getLayout(<Component pageProps={pageProps} />)
      ) : (
        <FullLayout>
          <Component {...pageProps} />
        </FullLayout>
      )}
    </Fragment>
  );
};
export default JanJapanDashboard;
