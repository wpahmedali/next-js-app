import { ITyreDetail } from './tyre-detail.interface';

export interface IPagination {
  total: number;
  count: number;
  perPage: number;
  currentPage: number;
  totalPages: number;
}

export interface ITyreList {
  tyreList: ITyreDetail[];
  pagination: IPagination;
}
