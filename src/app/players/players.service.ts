import { Injectable } from '@angular/core';
import { Character, SELECT, CharacterGroup } from "../characters/character";

@Injectable()
export class PlayerService {
    players: Character[];
    actual: Character;
    index: number = 0;
    player:Character;

    setPlayer(player:Character){
        this.player = player;
    }

    getPlayer():Character{
        return this.player;
    }

    setPlayers(players: Character[]) {
        this.players = players;
        this.setActual();
    }

    getPlayers(): Character[] {
        return this.players;
    }

    getClonePlayers():Character[]{
        let clone:Character[]=[];
        for (var index = 0; index < this.players.length; index++) {
            var element = Object.assign({},this.players[index]);
            clone.push(element);
        }
        return clone;

    }


    setActual(){
        for (var i = 0; i < this.players.length; i++) {
            var element:Character = this.players[i];
            if(element.orden==this.index){
                this.actual = element;
            }
            
        }
    }

    getActual(): Character {
        return this.actual;
    }

    getCloneActual(): Character {
         return Object.assign({},this.actual);
    }

    public nextActive(): Character {
        this.index++;
        for (let ind = 0; ind < this.players.length; ind++) {
            let character = this.players[ind];
            character.class = SELECT[1];
        }
        if (this.index >= this.players.length) {
            this.index = 0;
        }
        this.players[this.index].class = SELECT[0];
        this.setActual();
        return this.players[this.index];
        
    }

}
