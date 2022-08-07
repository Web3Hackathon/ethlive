import { Injectable } from '@angular/core';
import Web3Modal from 'web3modal';

import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3 from "web3";

@Injectable({
  providedIn: 'root'
})
export class ConnectService {
  readonly apikey = 'e4fa10cddeaf401698a3ae52121cdd79';

  web3Modal;
  web3Provider: any;
  provider: any;
  currentAccount: any;
  accounts: string[] | undefined;
  balance: string | undefined;
  private web3js: any;


  constructor() {
    const providerOptions = {

      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId: 'env', // required change this with your own infura id
          rpc: {
            1: "https://mainnet.infura.io/v3/" + this.apikey,
            42: "https://kovan.infura.io/v3/" + this.apikey,
            137: "https://polygon-mainnet.infura.io/v3/" + this.apikey,
            80001: "https://rpc-mumbai.matic.today",
        },
          description: 'Scan the qr code and sign in',
          qrcodeModalOptions: {
            desktopLinks: [
              'ledger',
              'tokenary',
              'wallet',
              'wallet 3',
              'secuX',
              'ambire',
              'wallet3',
              'apolloX',
              'zerion',
              'sequence',
              'punkWallet',
              'kryptoGO',
              'nft',
              'riceWallet',
              'vision',
              'keyring'
            ],
            mobileLinks: [
              "rainbow",
              "metamask",
              "argent",
              "trust",
              "imtoken",
              "pillar",
            ],
          },
        }
      },
      injected: {
        display: {
          logo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg',
          name: 'metamask',
          description: 'Connect with the provider in your Browser'
        },
        package: null
      },
    };

    this.web3Modal = new Web3Modal({
      network: 'mumbai', // optional change this with the net you want to use like rinkeby etc
      cacheProvider: false, // optional
      disableInjectedProvider: false,
      providerOptions, // required
      theme: {
        background: 'rgb(39, 49, 56)',
        main: 'rgb(199, 199, 199)',
        secondary: 'rgb(136, 136, 136)',
        border: 'rgba(195, 195, 195, 0.14)',
        hover: 'rgb(16, 26, 32)'
      }
    });
  }


  async connectAccount() {
    this.provider = await this.web3Modal.connect(); // set provider
    if (this.provider) {
      this.web3js = new Web3(this.provider);
    }
    this.accounts = await this.web3js.eth.getAccounts();
    return this.accounts;
  }


  async logoutAccount() {
    this.provider = await this.web3Modal.clearCachedProvider();
    window.localStorage.clear();
  }

  async accountInfo(account: any[]) {
    const initialvalue = await this.web3js.eth.getBalance(account);
    this.balance = this.web3js.utils.fromWei(initialvalue, 'ether');
    return this.balance;
  }

  async getNetwork(){
    const NetId = await this.web3js.eth.net.getNetworkType();
    return NetId
  }


}
