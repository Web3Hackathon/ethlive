import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from "../chat/chat.component";
import { InfoComponent } from "../info/info.component";
import { StreamerComponent } from "../streamer/streamer.component";
import { GraphqlService } from '../services/graphql.service';
import { NFTStorageService } from '../services/nftstorage.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule , ChatComponent , InfoComponent, StreamerComponent , FormsModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
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
