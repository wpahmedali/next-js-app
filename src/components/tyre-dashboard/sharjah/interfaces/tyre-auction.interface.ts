import { ITyreIncomingAuction } from 'src/interfaces/tyres/sharjah/tyre-incoming-auction.interface';
import { ITyreLatestAuction } from 'src/interfaces/tyres/sharjah/tyre-latest-auction.interface';

export interface ITyreAuction {
  latestAuction: ITyreLatestAuction[];
  incomingAuction: ITyreIncomingAuction[];
}
