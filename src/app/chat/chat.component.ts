import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  // TODO: Endpoint para leer el chat.
  // TODO: Endpoint para escribir en el chat.

  constructor() { }

  ngOnInit(): void {
  }

}
