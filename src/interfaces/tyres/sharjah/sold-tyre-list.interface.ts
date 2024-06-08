import { ISoldTyreDetail } from './sold-tyre-detail.interface';

export interface IPagination {
  total: number;
  count: number;
  perPage: number;
  currentPage: number;
  totalPages: number;
}

export interface ISoldTyreList {
  tyreList: ISoldTyreDetail[];
  pagination: IPagination;
}
