import Error from 'components/error';
import Loading from 'components/loading';
import { sharjahCountry } from 'components/tyre-dashboard/common/constants';
import React from 'react';
import { Fragment } from 'react';
import { useTyreSharjah } from 'react-query/hooks/api/tyres/sharjah/tyre';

const GoogleMap = () => {
  const countryId = sharjahCountry.id;
  const { data, isLoading, isError, isSuccess } = useTyreSharjah(countryId);

  return (
    <Fragment>
      <div className="flex bg-black text-white justify-start items-center p-3 px-7 font-bold uppercase text-lg w-full">
        Find Us On Google Map
      </div>
      <div className="w-full">
        {isLoading && <Loading />}
        {(!data || isError) && !isLoading && <Error />}

        {isSuccess && data && (
          <iframe
            src={data?.data?.contactInformation.googleMap}
            width="100%"
            height="450"
            className="border-0"
            loading="lazy"
          ></iframe>
        )}
      </div>
    </Fragment>
  );
};

export default GoogleMap;
