import { Component, OnDestroy, PLATFORM_ID, Inject, ViewChild, ElementRef } from '@angular/core';
import { CommonModule, isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-golive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './golive.component.html',
  styleUrls: ['./golive.component.scss']
})
export class GoliveComponent implements OnDestroy {
  apikey = '47ca6d88-5dcf-4162-90fc-b713e4d9ecb3';
  @ViewChild('video', {static: true}) video: ElementRef<HTMLVideoElement>;
 
  constructor(@Inject(PLATFORM_ID) private _platform: Object) {}

  onStart(){
    if(isPlatformBrowser(this._platform) && 'mediaDevices' in navigator) {
      navigator.mediaDevices.getUserMedia({video: true}).then((ms: MediaStream) => {
        const _video = this.video.nativeElement;
        _video.srcObject = ms;
        _video.play(); 
      });
    }
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