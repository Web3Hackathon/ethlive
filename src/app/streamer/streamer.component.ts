import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-streamer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './streamer.component.html',
  styleUrls: ['./streamer.component.scss']
})
export class StreamerComponent implements OnInit {

  public StreamUrl: string = 'https://livepeercdn.com/hls/58188q0b23y34v26/index.m3u8';
  public playbackId: string = '55b4wml4dw0fewf6';

  constructor() { }

  ngOnInit(): void {

  }

}
