import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Character, CharacterGroup, PlayerSelect, SELECT } from "../characters/character";
import { CharacterUtil } from "../characters/character.util";
import { ChatService } from "../chat/chat.service";
import { PlayerService } from "../players/players.service";

@Component({
  selector: 'characters',
  templateUrl: './character.component.html',
  styleUrls: ['../app.component.css', '../animate.css'],
})
export class CharacterComponent implements OnInit {
  playerSelect: PlayerSelect;
  title: string = "Characters";
  charactersGroup: CharacterGroup[] = [];
  characters: Character[];
  actual: Character;
  index: number;
  chat: any;
  playerReady: boolean = false;

  constructor(private chatService: ChatService, private playerService: PlayerService) {

  }

  selectCharacter(character: Character): boolean {
    this.playerSelect.actual = character;
    this.playerSelect.actual.animation = "icon animated bounce";
    return false;
  }

  initPlayer(character: Character) {
    this.playerSelect.actual = character;
    character.class = SELECT[0];
    //this.getPlayers();
    this.playerService.setPlayer(character);
    this.chatService.sendCharacterMessage(character);
  }

  ngOnInit(): void {
    this.characters = [];
    this.playerSelect = new PlayerSelect();
    this.chatService.requestAllPlayer();
    this.chatService.getAllCharacterMessages().subscribe(message => {
      this.refreshPlayers(message);
    });
  }

  refreshPlayers(obj: any) {
    this.playerSelect.characters = obj;
    this.playerSelect.charactersGroup = CharacterUtil.groupCharacters(this.playerSelect.characters, 2);
    if (this.playerSelect.actual) {
      let ind = this.playerSelect.characters.findIndex(player => this.playerSelect.actual.id == player.id);
      if (ind >= 0) {
        this.playerSelect.actual = this.playerSelect.characters[ind];
      }
    }
  }

}
