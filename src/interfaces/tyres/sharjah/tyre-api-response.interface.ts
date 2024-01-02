import { IAvailableTyreData } from './available-tyre-data.interface';

export interface ISharjahTyreApiResponse {
  success: boolean;
  tyreAuctionDate: string;
  data: IAvailableTyreData[];
  message: string;
}
