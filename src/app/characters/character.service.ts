import { Injectable } from '@angular/core';
import { Character, SELECT, CharacterGroup } from "./character";
import { CHARACTERS } from "./mock-characters";
import { ChatService } from "../chat/chat.service";

@Injectable()
export class CharacterService {
  
  public groupCharacters(characters: Character[], maxGroup: number): CharacterGroup[] {
    let charactersGroup: CharacterGroup[] = [];
    let j = 0;
    let group: CharacterGroup = new CharacterGroup();
    characters.forEach(character => {
      j++;
      group.characters.push(character);
      if ((j % maxGroup) == 0 || j >= characters.length) {
        charactersGroup.push(group);
        group = new CharacterGroup();
      }
    });
    return charactersGroup;
  }

  

}
