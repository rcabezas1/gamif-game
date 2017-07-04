import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Character, CharacterGroup, PlayerSelect, SELECT } from "../characters/character";
import { CharacterService } from "../characters/character.service";
import { ChatService } from "../chat/chat.service";
import { PlayerService } from "./players.service";
import { Game } from "../game/game";

@Component({
  selector: 'players',
  templateUrl: './players.component.html',
  styleUrls: ['../app.component.css', '../animate.css'],
  providers: [CharacterService]
})
export class PlayersComponent implements OnInit {
  title: string = "Players";
  charactersGroup: CharacterGroup[] = [];
  characters: Character[];
  actual: Character;
  index: number;

  constructor(private characterService: CharacterService, private chatService: ChatService, private playerService:PlayerService) {
  }

  getPlayers() {
    this.chatService.getPlayersMessages().subscribe((message) =>{
      let players:any = message;
      this.characters = players;
      this.playerService.setPlayers(this.characters);
      this.charactersGroup = this.characterService.groupCharacters(this.characters, 2);
      this.index = 0;
      this.actual = this.characters[this.index];
    });
  }



  ngOnInit(): void {
      this.getPlayers();
      
  }

   
}