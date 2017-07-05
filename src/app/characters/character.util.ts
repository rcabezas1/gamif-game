import { Character, SELECT, CharacterGroup } from "./character";

export class CharacterUtil {
  public static groupCharacters(characters: Character[], maxGroup: number): CharacterGroup[] {
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
