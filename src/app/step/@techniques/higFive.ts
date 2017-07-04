import { Step } from "../step";
import { CORES, Core } from "../../board/technique";
import { SelectPlayer } from "../challenge/selectPlayer";
import { PlayerService } from "../../players/players.service";
import { Character } from "../../characters/character";

const core: Core = CORES[1];

export class HighFive extends Step {
    constructor(playerService: PlayerService) {
        super(core,
            "-High Five",
            "When achievement is reached a team high five to celebrate would be highly appropriate. It is a way of saying job well done and encourages a positive feeling about the activity completed.",
            core.img,
            core.fill);
        let player: Character = playerService.getCloneActual();
        player.img = "../assets/img/challenge/7/a.gif";
        let players: Character[] = [];
        players.push(player);
        this.test = new SelectPlayer(players,playerService.getActual(), "High Five to!: "+player.nameCh, 10);
    }

}