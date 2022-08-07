import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectService} from "../services/connect/connect.service";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    private connect: ConnectService
  ) { }

  ngOnInit(): void {
  }


  Connect(){
    this.connect.connectAccount().then(response =>{
      console.log(response);

    }).catch((error:any) =>{
      console.error(error);
    })
    console.log('aca');
  }
}
