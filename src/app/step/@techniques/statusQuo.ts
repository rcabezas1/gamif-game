import { Step } from "../step";
import { CORES, Core } from "../../board/technique";
import { SelectPlayer } from "../challenge/selectPlayer";
import { PlayerService } from "../../players/players.service";
import { Character } from "../../characters/character";

const core: Core = CORES[0];

export class StatusQuo extends Step {
    constructor(playerService: PlayerService) {
        super(core,
            "-Status Quo Sloth",
            "They are avoiding a change in their habits and behavior. The user starts to build a habit of committing the Desired Actions within your experience, and actually feels a bit uncomfortable when she is not doing those actions.",
            core.img,
            core.fill);
        let player: Character = playerService.getActual();
        player.badge = "../assets/img/challenge/badges/statusQuo.png";
        player.effect = 1;
        player.multiplier = -50;
        player.change = true;
        let players: Character[] = [];
        players.push(player);
        this.test = new SelectPlayer(players,playerService.getActual(), "Crowning!: "+player.nameCh, 10);
    }

}