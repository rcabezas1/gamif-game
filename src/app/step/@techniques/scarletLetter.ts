import { Step } from "../step";
import { CORES, Core } from "../../board/technique";
import { SelectPlayer } from "../challenge/selectPlayer";
import { PlayerService } from "../../players/players.service";
import { Character } from "../../characters/character";

const core: Core = CORES[1];

export class ScarletLetter extends Step {
    constructor(playerService: PlayerService) {
        super(core,
            "-Scarlet Letter",
            "Fear of becoming “the loser” in your group.",
            core.img,
            core.fill);
        let players: Character[] = playerService.getClonePlayers();
        players.sort((p1: Character, p2: Character) => {
            if (p1.score > p2.score) {
                return -1;
            } else if (p2.score > p1.score) {
                return 1;
            }else{
                return p2.nameCh.localeCompare(p1.nameCh);
            }
        });
        this.test = new SelectPlayer(players.slice(0,3),playerService.getActual(), "Are you in losers?", 10);
    }

}