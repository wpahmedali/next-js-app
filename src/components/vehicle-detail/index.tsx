import { Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VehicleInfo from './components/vehicle-info';
import Title from './components/Title';
import Buttons from './components/buttons';
import ViewCountBar from './components/ViewCountBar';
import Auction from './components/Auction';
import Enquiry from './components/enquiry';
import SalesTeam from './components/sales-team';
import ContactInfo from './components/contact-info';
import AuctionButtons from 'components/auction-buttons';
import { useVehicleDetail } from 'react-query/hooks/api/vehicle-detail';
import Error from 'components/error';
import { NextRouter, useRouter } from 'next/router';
import { useIsAuctionCountry } from 'src/hooks/auction-country';
import { useNextPreviousCarList } from 'react-query/hooks/api/next-previous-car';
import PageLoader from 'components/page-loader';
import { getVehicleDetail } from 'react-query/api/vehicle-detail';
import { useQueryClient } from 'react-query';
import { useRouterParams } from 'src/hooks/router-params';

const VehicleDetail = (): JSX.Element => {
  const queryClient = useQueryClient();
  const isAuctionCountry = useIsAuctionCountry();

  const { query }: NextRouter = useRouter();
  const params = useRouterParams(query);

  const {
    data: nextData,
    isSuccess: nextIsSuccess,
    isLoading: nextIsLoading,
  } = useNextPreviousCarList(params);

  const currentIndex = nextData?.data?.findIndex(
    (x) => x.carId === Number(params.carId)
  );

  const nextVehicle = nextData?.data?.[currentIndex + 1];
  const previousVehicle = nextData?.data?.[currentIndex - 1];

  if (nextVehicle?.carId) {
    queryClient.prefetchQuery({
      queryKey: ['vehicleDetail', params.countryId, nextVehicle.carId],
      queryFn: () => getVehicleDetail(params.countryId, nextVehicle.carId),
    });
  }
  if (previousVehicle?.carId) {
    queryClient.prefetchQuery({
      queryKey: ['vehicleDetail', params.countryId, previousVehicle.carId],
      queryFn: () => getVehicleDetail(params.countryId, previousVehicle.carId),
    });
  }

  const { data, isLoading, isError } = useVehicleDetail(
    params.countryId,
    params.carId
  );

  return (
    <AnimatePresence>
      {(isLoading || nextIsLoading) && (
        <PageLoader isLoading={isLoading || nextIsLoading} />
      )}
      <Fragment>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.3 }}
        >
          <main className="bg-light w-full min-h-screen">
            {isAuctionCountry && <AuctionButtons />}
            <Buttons />
            {(!data || isError) && !isLoading && <Error />}
            {nextIsSuccess &&
              data?.data &&
              Object.keys(data.data).length > 0 && (
                <Fragment>
                  <Title data={data.data} />
                  <VehicleInfo data={data.data} />
                  <ViewCountBar data={data.data} />
                  <div className="text-white uppercase font-medium p-2 mt-2 mb-2 bg-[#099731] text-lg border w-full">
                    Stock Available In {data.data.countryName},{' '}
                    {data.data.cityName}
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-1">
                    <Auction
                      countryName={data.data.countryName}
                      cityName={data.data.cityName}
                      vehicleImage={
                        data.data?.carImages?.length > 0
                          ? data.data.carImages[
                              data.data.carImages.length - 1
                            ].imagePath.replace('/s_thumb', '/thumb')
                          : ''
                      }
                    />
                    <Enquiry
                      currencySymbol={data.data.currencySymbol}
                      fobPrice={data.data.fobPrice}
                      carId={data.data.carId}
                    />
                  </div>
                  {data.data.staffMembers?.length > 0 && (
                    <SalesTeam staffMembers={data.data.staffMembers} />
                  )}
                  {data.data.contactInformation?.length > 0 && (
                    <ContactInfo contactInfo={data.data.contactInformation} />
                  )}
                </Fragment>
              )}
          </main>
        </motion.div>
      </Fragment>
    </AnimatePresence>
  );
};

export default VehicleDetail;
