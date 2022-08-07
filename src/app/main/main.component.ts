import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from "../chat/chat.component";
import { InfoComponent } from "../info/info.component";
import { StreamerComponent } from "../streamer/streamer.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule , ChatComponent , InfoComponent, StreamerComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
