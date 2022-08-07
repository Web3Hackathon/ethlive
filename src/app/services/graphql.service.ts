import { Injectable } from '@angular/core';
import { ZDK, ZDKNetwork, ZDKChain } from "@zoralabs/zdk";

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
}
