import { Step } from "../step";
import { CORES, Core } from "../../board/technique";
import { SelectPlayer } from "../challenge/selectPlayer";
import { PlayerService } from "../../players/players.service";
import { Character } from "../../characters/character";

const core: Core = CORES[0];

export class RandomRewards extends Step {
    constructor(playerService: PlayerService) {
        super(core,
            "-Random Rewards",
            "While fixed action rewards are great for helping companies build loyalty, they are heavily implemented and lacks some right brain core drives that gets customers really engaged. There are a few ways to spice things up, and Random Rewards is one of them. In games, there is the concept of “loot” or “drops” which are random rewards that appear once the player achieves a win-state or defeats an enemy. ",
            core.img,
            core.fill);
        let player: Character = playerService.getActual();
        player.badge = "../assets/img/challenge/badges/random.png";
        player.effect = 1;
        player.multiplier = Math.floor(100*Math.random());
        player.change = true;
        let players: Character[] = [];
        players.push(player);
        this.test = new SelectPlayer(players,playerService.getActual(), "Random!: "+player.nameCh, 10);
    }

}