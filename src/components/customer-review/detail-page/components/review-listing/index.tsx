import React from 'react';
import { Fragment } from 'react';
import Error from 'components/error';
import { NextRouter, useRouter } from 'next/router';
import { useCustomerReview } from 'react-query/hooks/api/customer-review';
import ListingItem from './components/ListingItem';
import PageLoader from 'components/page-loader';
import Pagination from 'components/pagination';
import { useRouterParams } from 'src/hooks/router-params';

const ReviewListing = ({ setLightBox, setLightboxIndex }) => {
  const { query }: NextRouter = useRouter();
  const params = useRouterParams(query);

  const { data, isLoading, isSuccess, isError, isPreviousData } =
    useCustomerReview(params.countryId, params.page, params.perPage);

  return (
    <Fragment>
      <div className="bg-primary text-black text-center w-full my-4 p-2 text-2xl">
        - Customer Review List -
      </div>
      <Pagination isLoading={isPreviousData} data={data?.data.pagination} />
      {(!data || isError) && !isLoading && <Error />}
      {isLoading && <PageLoader isLoading={isLoading} />}
      {isSuccess && (
        <div className="w-full px-3">
          <ul role="list" className="divide-y divide-gray-100">
            {data?.data?.reviewList.map((person, i) => (
              <ListingItem
                i={i}
                key={person.id}
                person={person}
                setLightBox={setLightBox}
                setLightboxIndex={setLightboxIndex}
              />
            ))}
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export default ReviewListing;
