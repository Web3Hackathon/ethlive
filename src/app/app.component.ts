import { Component } from '@angular/core';
import { GraphqlService } from './services/graphql.service';
import { NFTStorageService } from './services/nftstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ethlive';
  file: any;

  constructor(
    private graphQLService: GraphqlService,
    private NFTStorageService: NFTStorageService
  ){
    this.graphQLService.getSales().then(console.log);
  }

  uploadNFT(event: any){
    this.NFTStorageService.storeNFT(event.target.files[0], event.target.files[0].name, 'Dummy image');
  }
}
