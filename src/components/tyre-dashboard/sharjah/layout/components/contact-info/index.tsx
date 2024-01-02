import Error from 'components/error';
import Loading from 'components/loading';
import { sharjahCountry } from 'components/tyre-dashboard/common/constants';
import React from 'react';
import { Fragment } from 'react';
import { useTyreSharjah } from 'react-query/hooks/api/tyres/sharjah/tyre';

const ContactInfo = () => {
  const countryId = sharjahCountry.id;
  const { data, isLoading, isError, isSuccess } = useTyreSharjah(countryId);

  return (
    <Fragment>
      <div className="flex bg-black text-white justify-start items-center p-3 px-7 font-bold uppercase text-lg w-full">
        Contact Info:
      </div>
      <div className="bg-gray-100 text-xs text-black p-7">
        {isLoading && <Loading />}
        {(!data || isError) && !isLoading && <Error />}

        {isSuccess && (
          <div className="justify-between grid-flow-dense gap-2">
            <div className="text-lg">
              <p className="font-bold my-2">Office Location</p>
              <p>{data.data.contactInformation.area}</p>
              <p>{data.data.contactInformation.building}</p>
              <p>{data.data.contactInformation.furtheraddress}</p>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default ContactInfo;
