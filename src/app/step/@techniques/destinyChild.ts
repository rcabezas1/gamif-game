import { Step } from "../step";
import { CORES, Core } from "../../board/technique";
import { SelectPlayer } from "../challenge/selectPlayer";
import { PlayerService } from "../../players/players.service";
import { Character } from "../../characters/character";

const core: Core = CORES[0];

export class DestinyChild extends Step {
    constructor(playerService: PlayerService) {
        super(core,
            "-Destiny Child",
            "Try to make feel the user as he was born to do something bigger",
            core.img,
            core.fill);
        let player: Character = playerService.getActual();
        player.badge = "../assets/img/challenge/badges/destiny.png";
        player.effect = 1;
        player.multiplier = 60;
        player.change = true;
        let players: Character[] = [];
        players.push(player);
        this.test = new SelectPlayer(players,playerService.getActual(), "Crowning!: "+player.nameCh, 10);
    }

}