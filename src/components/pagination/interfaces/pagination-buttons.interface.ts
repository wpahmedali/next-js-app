import { IPagination } from 'src/interfaces/vehicle-list.interface';

export interface IPaginationButtons {
  isLoading: boolean;
  data: IPagination;
  handlePageChange: (val: number) => void;
  handleNextPage: () => void;
  handlePrevPage: () => void;
}
