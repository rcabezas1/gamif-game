import { Step } from "../step";
import { CORES, Core } from "../../board/technique";
import { SelectPlayer } from "../challenge/selectPlayer";
import { PlayerService } from "../../players/players.service";
import { Character } from "../../characters/character";

const core: Core = CORES[1];

export class AuraEffect extends Step {
    constructor(playerService: PlayerService) {
        super(core,
            "-Aura Effect",
            "A game technique where the action of one player, has a rub off positive effect on another player by virtue of being around this player or in it’s energy field. This can generate additional points, boosters in terms of skills or weapons allowed in the game.",
            core.img,
            core.fill);
        
        let down = 0;
        let curr = 0;
        let up = 0;

        let players: Character[]  = playerService.getPlayers();
        let actual: Character = playerService.getActual();
        curr = players.findIndex(player => player.id == actual.id );
        up = curr+1;
        down = curr-1;
        if(down<0){
            down = players.length-1;
        }
        if(up>=players.length){
            up = 0;
        }

        let allPlayers:Character[]=[];
        allPlayers.push(players[down]);
        allPlayers.push(actual);
        allPlayers.push(players[up]);
        let showPlayer:Character[]=[];
        for (let index = 0; index < allPlayers.length; index++) {
            let player = allPlayers[index];
            player.badge = "../assets/img/challenge/badges/aurora.png";
            player.effect = 3;
            player.multiplier = 10;
            player.change = true;
            showPlayer.push(Object.assign({},player));
        }
        this.test = new SelectPlayer(showPlayer,playerService.getActual(), "Aurora!: "+actual.nameCh, 10);
    }

}