import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-streams',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.scss']
})
export class StreamsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
