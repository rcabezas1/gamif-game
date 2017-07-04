import { Step } from "../step";
import { CORES, Core } from "../../board/technique";
import { SelectPlayer } from "../challenge/selectPlayer";
import { PlayerService } from "../../players/players.service";
import { Character } from "../../characters/character";

const core: Core = CORES[1];

export class Crowning extends Step {
    constructor(playerService: PlayerService) {
        super(core,
            "-Crowning",
            "Someone with a mayorship will play into the status seeking motivation most leaderboards also try to tap into. Being the top person to check in or learn most or contribute most can drive behaviour and funny but meaningful names such as a mayorship can help and you don’t need to publish a leaderboard in order to do this.",
            core.img,
            core.fill);
        let player: Character = playerService.getActual();
        player.badge = "../assets/img/challenge/badges/crown.png";
        player.change = true;
        let players: Character[] = [];
        players.push(player);
        this.test = new SelectPlayer(players,playerService.getActual(), "Crowning!: "+player.nameCh, 10);
    }

}