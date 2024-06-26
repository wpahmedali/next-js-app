import React from 'react';
import { NextRouter, useRouter } from 'next/router';
import ButtonItem from './components/ButtonItem';
import { useRouterParams } from 'src/hooks/router-params';
import { useSubCountryList } from 'react-query/hooks/api/sub-country-list';

const SubCountriesButton = () => {
  const { query }: NextRouter = useRouter();
  const params = useRouterParams(query);
  const { data, isSuccess } = useSubCountryList(params.countryId);

  return (
    <div className="grid w-full grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 grid-rows-1 grid-flow-dense gap-2 ">
      {isSuccess &&
        data?.data?.map((item) => (
          <ButtonItem key={item.id} item={item} countryId={params.countryId} />
        ))}
    </div>
  );
};

export default SubCountriesButton;
