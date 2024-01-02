import Error from 'components/error';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';
import { useGlobalContactDetail } from 'react-query/hooks/api/global-contact-detail';
import { useCurrentCountry } from 'src/hooks/current-country';
import { getIdFromParam } from 'utils/get-id-from-param';
import { MailSpsIcon, MapSpsIcon, UserCardIcon, WhatsappSpsIcon } from 'icons';
import { UserIcon } from '@heroicons/react/20/solid';
import { useLoadingState } from 'src/providers/LoadingContext';
import PageLoader from 'components/page-loader';
const GlobalContactDetail = () => {
  const {
    query: { country },
  } = useRouter();

  const countryId =
    country && !Array.isArray(country) ? getIdFromParam(country) : 0;

  const currentCountry = useCurrentCountry();
  const loadingState = useLoadingState();

  const { data, isPreviousData, isLoading, isError, isSuccess } =
    useGlobalContactDetail(countryId);

  return (
    <main className="bg-light w-full min-h-screen">
      <PageLoader
        isLoading={
          (isLoading || isPreviousData) && loadingState === 'countryLoading'
        }
      />
      {(!data || isError) && !isLoading && <Error />}
      {data?.data?.length === 0 && (
        <div className="my-5 text-red-600 text-center">Data Not Found</div>
      )}
      {isSuccess &&
        data?.data?.map((item, index) => (
          <Fragment key={`${item.countryId}-${index}`}>
            <div className="flex bg-primary text-black justify-start items-center p-3 px-7 font-bold uppercase text-lg w-full gap-2">
              {currentCountry.isSuccess && currentCountry.flagIcon}{' '}
              {item.Office}
            </div>

            <div className="bg-gray-100 text-xs text-black p-7">
              <div className="justify-between grid grid-cols-2 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 grid-rows-1 grid-flow-dense gap-2">
                <div className="text-lg">
                  <p className="text-3xl font-bold">{item.companyName}</p>
                  <p className="font-bold my-2">Address:</p>
                  <p>
                    <strong>{item.Location}</strong>
                    <br></br>
                    {item.officeAddress}
                  </p>
                  <div className="flex">
                    <WhatsappSpsIcon />
                    <div className="ml-2">{item.phoneNmberOne}</div>
                  </div>
                  <div className="flex">
                    <MailSpsIcon />
                    <div className="ml-2">{item.email}</div>
                  </div>
                  <div className="flex">
                    <div className="bg-green-600 rounded-xl p-1 d-block justify-center items-center w-5 h-5">
                      <UserIcon width={12} height={12} fill="#fff" />
                    </div>
                    <div className="ml-2">
                      Employee Count {item.employeeCount}
                      <span className="text-red-700 font-bold">(45)</span>
                    </div>
                  </div>
                </div>
                <div className="justify-self-end cursor-pointer content-center self-center 2xl:justify-self-end sm:justify-self-center xs:justify-self-center xxs:justify-self-center pr-7">
                  <MapSpsIcon />
                </div>
              </div>
            </div>

            <div className="flex bg-primary text-black justify-start items-center p-3 px-7 font-bold uppercase text-lg w-full">
              find us on google map
            </div>

            <div dangerouslySetInnerHTML={{ __html: item.googleMapCode }}></div>

            <div className="flex bg-primaryDark text-white justify-start items-center p-3 mt-2 px-7 font-bold uppercase text-lg w-full">
              {item.OurTeam}
            </div>
            <div className="bg-gray-100 text-xs font-bold text-black p-7">
              <div className="w-full grid 2xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-2">
                {item.teams.map((item) => (
                  <div
                    className="bg-white text-black p-5 px-7 flex justify-between"
                    key={item.memberId}
                  >
                    <UserCardIcon />
                    <div className="text-right">
                      <p className="text-xl">{item.memberName}</p>
                      <p className="text-sm">{item.memberDesignation}</p>
                      <p className="text-sm">{item.memberPhone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Fragment>
        ))}
    </main>
  );
};

export default GlobalContactDetail;
