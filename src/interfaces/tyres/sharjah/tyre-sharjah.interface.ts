import { ITyreContactInfo } from './tyre-contact-info.interface';
import { ITyreLatestAuction } from './tyre-latest-auction.interface';
import { ITyreIncomingAuction } from './tyre-incoming-auction.interface';

export interface ITyreSharjah {
  contactInformation: ITyreContactInfo;
  tyreLatestAuction: ITyreLatestAuction[];
  incommingtAuctionDate: ITyreIncomingAuction[];
}
