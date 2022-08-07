import { Component, OnDestroy, PLATFORM_ID, Inject, ViewChild, ElementRef } from '@angular/core';
import { CommonModule, isPlatformBrowser} from '@angular/common';
const { isSupported } = require('@livepeer/webrtmp-sdk')
const { Client } = require('@livepeer/webrtmp-sdk')

@Component({
  selector: 'app-golive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './golive.component.html',
  styleUrls: ['./golive.component.scss']
})
export class GoliveComponent implements OnDestroy {
  apikey = '47ca6d88-5dcf-4162-90fc-b713e4d9ecb3';
  client = new Client(); 

  @ViewChild('video', {static: true}) video: ElementRef<HTMLVideoElement>;
 
  constructor(@Inject(PLATFORM_ID) private _platform: Object ) {}

  onStart(){
    if(isPlatformBrowser(this._platform) && 'mediaDevices' in navigator) {
      navigator.mediaDevices.getUserMedia({video: true}).then((ms: MediaStream) => {
        const _video = this.video.nativeElement;
        _video.srcObject = ms;
        _video.play(); 
      });


      
    }
  }



async startStream(){
  const stream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
  })
  const session = this.client.cast(stream, this.apikey)
  session.on('open', () => {
    console.log('Stream started.')
  })

  session.on('close', () => {
    console.log('Stream stopped.')
  })

  session.on('error', (error) => {
    console.log('Stream error.', error.message)
  })

}



  onStop() {
    this.video.nativeElement.pause();
    (this.video.nativeElement.srcObject as MediaStream).getVideoTracks()[0].stop();
    this.video.nativeElement.srcObject = null;
  }

  ngOnDestroy() {
    (this.video.nativeElement.srcObject as MediaStream).getVideoTracks()[0].stop();
  }
}
