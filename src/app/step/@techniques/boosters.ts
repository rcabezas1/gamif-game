import { Step } from "../step";
import { CORES, Core } from "../../board/technique";
import { SelectPlayer } from "../challenge/selectPlayer";
import { PlayerService } from "../../players/players.service";
import { Character } from "../../characters/character";

const core: Core = CORES[0];

export class Booster extends Step {
    constructor(playerService: PlayerService) {
        super(core,
            "-Boosters",
            "Makes easy go to a win state by adding aditional points",
            core.img,
            core.fill);
        let player: Character = playerService.getActual();
        player.badge = "../assets/img/challenge/badges/boost.png";
        player.effect = 2;
        player.multiplier = 80;
        player.change = true;
        let players: Character[] = [];
        players.push(player);
        this.test = new SelectPlayer(players,playerService.getActual(), "Booster!: "+player.nameCh, 10);
    }

}