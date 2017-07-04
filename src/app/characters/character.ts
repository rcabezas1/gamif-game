export const SELECT:string[]=[
    'list-group-item active',
    'list-group-item'
]
export class Character{
    id:string;
    fill: string;
    nameCh:string;
    score:number;
    img:string;
    class:string ;
    animation:string;
    orden:number;
    badge:string;
    multiplier:number=1;
    effect:number=0;
    change:boolean=false;
}

export class CharacterGroup {
  characters: Character[] = [];
}

export class PlayerSelect {
  charactersGroup: CharacterGroup[] = [];
  characters: Character[]=[];
  actual:Character;
  initial:boolean;
}