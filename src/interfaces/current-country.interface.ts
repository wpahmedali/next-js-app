export interface ICurrentCountry {
  isSuccess: boolean;
  isDelivered?: number;
  isAuctionSheetDisplay?: number;
  countryName: string;
  FBPageName?: string;
  FBAppId?: string;
  flagIcon: JSX.Element;
}
