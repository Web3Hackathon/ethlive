import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectService} from "../services/connect/connect.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  error: boolean = false;
  errorMessage: any | undefined;
  account: any | undefined;

  constructor(
    private connect: ConnectService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  Connect(){
    this.connect.connectAccount().then(response =>{
      this.account = response?[0] : undefined ;
      this.error = false;
      this.connect.currentAccount = this.account;
      this.router.navigate(['/main']);
    }).catch((error:any) =>{
      console.error(error);
      this.errorMessage = error;
      this.error = true
    })
  }

  Navigate(){
    console.log('aca');
  }
}
