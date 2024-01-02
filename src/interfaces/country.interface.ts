export interface ICountry {
  id: number;
  countryName: string;
  cssClass: string;
  countryCount: number;
  is_count?: boolean;
  auctionDisplay: boolean;
  auctionId: number;
  auctionShortName: string;
  auctionName: string;
  specialOffer: boolean;
  specialOfferTotal: number;
}

export interface ICountryApiRes {
  data: ICountry[];
  message: string;
  success: boolean;
  totalStock: number;
}
