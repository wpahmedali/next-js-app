export interface IAvailableTyreAuctionDetail {
  tyreSize: string;
  tyreQty: string;
}

export interface IAvailableTyreData {
  tyreTypeId: number;
  tyreTypeName: string;
  AuctionDetail: IAvailableTyreAuctionDetail[];
}
