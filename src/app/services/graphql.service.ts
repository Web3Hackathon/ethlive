import { Injectable } from '@angular/core';
import { ZDK, ZDKNetwork, ZDKChain } from "@zoralabs/zdk";
import { SaleSortKey, SaleType, SortDirection } from '@zoralabs/zdk/dist/queries/queries-sdk';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {
  private networkInfo = {
    network: ZDKNetwork.Ethereum,
    chain: ZDKChain.Mainnet,
  }
  private API_ENDPOINT = "https://api.zora.co/graphql";
  private args = {
    endPoint: this.API_ENDPOINT,
    networks: [this.networkInfo],
    apiKey: process.env.API_KEY
  }
  public zdK = new ZDK(this.args)

  constructor(
  ) {}

  getSales(){
    return this.zdK.sales({
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
    })
  }
}
