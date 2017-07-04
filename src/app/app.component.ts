import { Component, OnInit } from '@angular/core';
import { ChatService } from "./chat/chat.service";
import { PlayerService } from "./players/players.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './animate.css'],
  providers: [ChatService]
})


export class AppComponent implements OnInit {
  title = 'Gamification';

  constructor(private chatService: ChatService) {
  }

  ngOnInit(): void {

  }

  onResize(event) {
    console.log(event.target.innerWidth)
  }

}
