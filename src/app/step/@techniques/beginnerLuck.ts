import { Step } from "../step";
import { CORES, Core } from "../../board/technique";
import { SelectPlayer } from "../challenge/selectPlayer";
import { PlayerService } from "../../players/players.service";
import { Character } from "../../characters/character";

const core: Core = CORES[0];

export class BeginnersLuck extends Step {
    constructor(playerService: PlayerService) {
        super(core,
            "-Beginners Luck",
            "It is like an on-boarding program, where early successes are celebrated and further encouragement is given to hook the player further into the game. In an organisation this can be a very useful technique to use in the new starter programs, where early successes are celebrated and the opportunity amongst rookies exists to showcase their level of skills against one another or more experienced staff.",
            core.img,
            core.fill);
        let player: Character = playerService.getActual();
        player.badge = "../assets/img/challenge/badges/beginner.png";
        player.effect = 1;
        player.multiplier = 50;
        player.change = true;
        let players: Character[] = [];
        players.push(player);
        this.test = new SelectPlayer(players,playerService.getActual(), "Beginner!: "+player.nameCh, 10);
    }

}