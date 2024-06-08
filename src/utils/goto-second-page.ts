import { NextRouter } from 'next/router';
import { ROUTES } from 'src/common/routes';
import { ICarListParams } from 'src/interfaces/car-list-param.interface';

export const GotoSecondPage = (
  router: NextRouter,
  selectedCountry: string,
  params: ICarListParams
) => {
  const path = router.asPath.split('?');
  const newPath = `${
    path[0].length > 1
      ? path[0] + '/2'
      : params.countryId
      ? `/${ROUTES.COUNTRY_CAR_LIST}/${selectedCountry.toLowerCase()}-${
          params.countryId
        }/2`
      : ROUTES.ALL_STOCK + '/2'
  }${path.length > 1 ? '?' + path[1] : ''}`;
  router.push(newPath);
};
