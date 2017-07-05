import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Character, CharacterGroup, PlayerSelect, SELECT } from "../characters/character";
import { Game } from "../game/game";
import { ChatService } from "../chat/chat.service";
import { PlayerService } from "../players/players.service";
import { CharacterUtil } from "../characters/character.util";

@Component({
  selector: 'players',
  templateUrl: './players.component.html',
  styleUrls: ['../app.component.css', '../animate.css'],
})
export class PlayersComponent implements OnInit {
  title: string = "Players";
  charactersGroup: CharacterGroup[] = [];

  constructor(private chatService:ChatService, private playerService:PlayerService) {
  }

  ngOnInit(): void {
    this.chatService.requestPlayers();
    this.chatService.getPlayersMessages().subscribe((message: any) => {
            let players: Character[] = message;
            this.playerService.setPlayers(players);
            this.playerService.setActual();
            this.charactersGroup = CharacterUtil.groupCharacters(players, 2);
        });
  }

   
}