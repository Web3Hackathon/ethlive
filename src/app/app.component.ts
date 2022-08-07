import { Component } from '@angular/core';
import { LilNounsAuctionEventType, NounsAuctionEventType, SaleSortKey, SaleType, SortDirection } from '@zoralabs/zdk/dist/queries/queries-sdk';
import { GraphqlService } from './services/graphql.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ethlive';

  constructor(
    private graphQLService: GraphqlService
  ){
    this.graphQLService.zdK.sales({
      where: {
        sellerAddresses: ["0x830bd73e4184cef73443c15111a1df14e495c706"]
      },
      filter: {
        saleTypes: [SaleType.NounsAuctionSale]
      },
      sort:{
        sortKey: SaleSortKey.ChainTokenPrice,
        sortDirection: SortDirection.Asc
      },
      includeFullDetails: true
    }).then(console.log);
  }
}
