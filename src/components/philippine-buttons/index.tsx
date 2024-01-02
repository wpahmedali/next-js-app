import React from 'react';
import { NextRouter, useRouter } from 'next/router';
import { usePhilippineCountryList } from 'react-query/hooks/api/philippine-country-list';
import ButtonItem from './components/ButtonItem';
import { useRouterParams } from 'src/hooks/router-params';

const PhilippineButtons = () => {
  const { query }: NextRouter = useRouter();
  const params = useRouterParams(query);
  const { data, isSuccess } = usePhilippineCountryList(params.countryId);

  return (
    <div className="grid w-full grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 grid-rows-1 grid-flow-dense gap-2 ">
      {isSuccess &&
        data?.data?.map((item) => <ButtonItem key={item.id} item={item} />)}
    </div>
  );
};

export default PhilippineButtons;
