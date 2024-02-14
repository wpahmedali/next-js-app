export interface ICountry {
  id: number;
  countryName: string;
  countryCode: string;
  cssClass: string;
  FBPageName: string;
  FBAppId: string;
  countryCount: number;
  is_count: boolean;
  showReservedTag: number;
  isAuctionSheetDisplay: number;
  auctionDisplay: boolean;
  auctionId: number;
  auctionShortName: string;
  auctionName: string;
  specialOffer: boolean;
  specialOfferTotal: number;
  isPriceDisplay: number;
  whatsappNumber: string;
}

export interface ICountryApiRes {
  data: ICountry[];
  message: string;
  success: boolean;
  totalStock: number;
}
