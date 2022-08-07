import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-streamer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './streamer.component.html',
  styleUrls: ['./streamer.component.scss']
})
export class StreamerComponent implements OnInit {
  url: string = 'https://livepeercdn.com/hls/55b4wml4dw0fewf6/index.m3u8';
  public StreamUrl: any ;
  public playbackId: string = '55b4wml4dw0fewf6';

  constructor(public sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.StreamUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.StreamUrl);

  }

}
