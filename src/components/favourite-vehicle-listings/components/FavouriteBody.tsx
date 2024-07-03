import React, { Fragment } from 'react';
import Loading from 'components/loading';
import { useFavoritecarsList } from 'react-query/hooks/api/favorite-car-list';
import UpperSection from 'components/vehicle-listings/components/tabular-view-listings/components/UpperSection';
import LowerSection from 'components/vehicle-listings/components/tabular-view-listings/components/LowerSection';

const FavouriteBody = ({ favoriteCars }: { favoriteCars: number[] }) => {
  const { data, isLoading, isPreviousData } = useFavoritecarsList(favoriteCars);

  return (
    <tbody>
      {(isLoading || isPreviousData) && <Loading />}
      {data?.data.length > 0 &&
        data?.data?.map((item, index) => (
          <Fragment key={index}>
            <UpperSection
              url="/home/compare_cars/1"
              isEven={index % 2 !== 0}
              data={item}
            />
            <LowerSection
              url="/home/compare_cars/1"
              isEven={index % 2 !== 0}
              data={item}
            />
          </Fragment>
        ))}
    </tbody>
  );
};

export default FavouriteBody;
