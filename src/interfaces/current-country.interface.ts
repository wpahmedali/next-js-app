export interface ICurrentCountry {
  isSuccess: boolean;
  isCount?: boolean;
  isDelivered?: number;
  isAuctionSheetDisplay?: number;
  countryName: string;
  FBPageName?: string;
  FBAppId?: string;
  flagIcon: JSX.Element;
  id?: number;
}
