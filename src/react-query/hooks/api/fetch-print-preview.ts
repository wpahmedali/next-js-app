import { useQuery } from 'react-query';
import { getPrintPreview } from 'react-query/api/fetch-print-preview';
import { IApiResponse } from 'src/interfaces/api-response.interface';
import { ICarListParams } from 'src/interfaces/car-list-param.interface';
import { IPosterList } from 'src/interfaces/poster-list.interface';

export const usePrintPreview = (params: ICarListParams) =>
  useQuery<IApiResponse<IPosterList>, Error>(['PrintPreview', params], () =>
    getPrintPreview(params)
  );
