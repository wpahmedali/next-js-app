import React from 'react';
import VehicleDetail from 'components/vehicle-detail';
import Head from 'next/head';
import { Fragment } from 'react';
import { useVehicleDetailDynamicMetaData } from 'src/hooks/dynamic-meta-data';
import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();
  const dynamicMetaData = useVehicleDetailDynamicMetaData(router);
  return (
    <Fragment>
      <Head>
        <title>{dynamicMetaData?.title || "Jan's Group"}</title>
        {dynamicMetaData?.vehicleData?.map((item, i) => (
          <meta
            property={item?.property}
            content={item?.content?.toString()}
            key={i}
          />
        ))}
      </Head>
      <VehicleDetail />
    </Fragment>
  );
};

export default Page;
