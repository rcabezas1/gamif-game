import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Character, CharacterGroup, PlayerSelect, SELECT } from "../characters/character";
import { CharacterService } from "../characters/character.service";
import { ChatService } from "../chat/chat.service";
import { PlayerService } from "../players/players.service";

@Component({
  selector: 'characters',
  templateUrl: './character.component.html',
  styleUrls: ['../app.component.css', '../animate.css'],
  providers: [CharacterService]
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

  constructor(private characterService: CharacterService, private chatService: ChatService, private playerService:PlayerService) {
    
  }

  selectCharacter(character: Character): boolean {
    this.playerSelect.actual = character;
    this.playerSelect.actual.animation = "icon animated bounce";
    return false;
  }

  initPlayer(character: Character) {
    this.playerSelect.actual = character;
    character.class = SELECT[0];
    this.getPlayers();
    this.playerService.setPlayer(character);
    this.chatService.sendCharacterMessage(character);
  }

  getPlayers() {
    this.chatService.getPlayersMessages().subscribe(message => {
      let obj: any = message;
      this.characters = obj;
      this.charactersGroup = this.characterService.groupCharacters(this.characters, 2);
      this.playerReady = true;
      this.index = 0;
      this.actual = this.characters[this.index];
    });
  }

  ngOnInit(): void {
    this.characters = [];
    this.playerSelect = new PlayerSelect();
    this.chatService.getAllCharacterMessages().subscribe(message => {
      this.refreshPlayers(message);
    });
    this.chatService.getUpdateCharacterMessages().subscribe(message => {
      this.updateCharacter(message);
    });
  }

  refreshPlayers(obj: any) {
    this.playerSelect.characters = obj.ALL_CHARACTERS;
    this.playerSelect.charactersGroup = this.characterService.groupCharacters(this.playerSelect.characters, 2);
  }

  updateCharacter(obj: any) {
    let ind = this.playerSelect.characters.findIndex(element => element.id === obj.id)
    if (ind > -1) {
      this.playerSelect.characters[ind] = obj;
      this.playerSelect.charactersGroup = this.characterService.groupCharacters(this.playerSelect.characters, 2);
      if (this.playerSelect.actual && obj.id == this.playerSelect.actual.id) {
        this.playerSelect.actual.class = obj.class;
      }
    }
  }

}
