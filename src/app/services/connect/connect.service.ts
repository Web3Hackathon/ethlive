import { Injectable } from '@angular/core';
import { providers } from 'ethers';
import Web3Modal from 'web3modal';

import WalletConnectProvider from '@walletconnect/web3-provider';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {
  web3Modal;
  web3Provider: any;
  provider: any;
  accounts: any| undefined;


  constructor() {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId: 'env', // required change this with your own infura id
          description: 'Scan the qr code and sign in',
          qrcodeModalOptions: {
            mobileLinks: [
              'rainbow',
              'metamask',
              'argent',
              'trust',
              'imtoken',
              'pillar'
            ]
          }
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
      network: 'mainnet', // optional change this with the net you want to use like rinkeby etc
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
      this.web3Provider = new providers.Web3Provider(this.provider);
    } // create web3 instance
    this.accounts = await this.provider.send("eth_requestAccounts", []);






    return this.accounts;
  }
}
