import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-streamer',
  templateUrl: './streamer.component.html',
  styleUrls: ['./streamer.component.scss']
})
export class StreamerComponent implements OnInit {

  public StreamUrl: string = 'https://livepeercdn.com/hls/55b4wml4dw0fewf6/index.m3u8';
  public playbackId: string = '55b4wml4dw0fewf6';

  constructor() { }

  ngOnInit(): void {

  }

}
