import { Step } from "../step";
import { CORES, Core } from "../../board/technique";
import { SelectPlayer } from "../challenge/selectPlayer";
import { PlayerService } from "../../players/players.service";
import { Character } from "../../characters/character";

const core: Core = CORES[1];

export class Leaderboard extends Step {
    constructor(playerService: PlayerService) {
        super(core,
            "-Leaderboard",
            "Which includes where you rank amongst your friends. The leaderboard gives you all sorts of metrics you can try to achieve, including what your friends scores for that level. This motivates players because they can see their own progress against their friends’ scores, stars, leaderboard positions, and number of levels beaten or progress within the game.",
            core.img,
            core.fill);
        let players: Character[] = playerService.getClonePlayers();
        players.sort((p1: Character, p2: Character) => {
            if (p1.score > p2.score) {
                return 1;
            } else if (p2.score > p1.score) {
                return -1;
            }else{
                return p1.nameCh.localeCompare(p2.nameCh);
            }
        });
        this.test = new SelectPlayer(players.slice(0,3),playerService.getActual(), "Are you in leaders?", 10);
    }

}