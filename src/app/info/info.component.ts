import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ConnectService } from '../services/connect/connect.service';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(
    private connect: ConnectService,

  ) { }

  ngOnInit(): void {
  }



mintSub(){
  this.connect.connectAccount().then(response =>{
    console.log(response[0]);
const account = response[0];
this.connect.Subscribe(account, 2).then(response =>{
  console.log(response);
}).catch((error:any) =>{
console.error(error);
});
  }).catch((error:any) =>{
    console.error(error);
  });


}



}
