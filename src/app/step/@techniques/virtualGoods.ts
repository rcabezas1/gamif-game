import { Step } from "../step";
import { CORES, Core } from "../../board/technique";
import { SelectPlayer } from "../challenge/selectPlayer";
import { PlayerService } from "../../players/players.service";
import { Character } from "../../characters/character";

const core: Core = CORES[7];

export class VirtualGoods extends Step {
    constructor(playerService: PlayerService) {
        super(core,
            "-Virtual Goods",
            "Virtual goods are often used in loyalty programs such as airlines frequent flyer miles. As you earn mileage points you can use these to buy further goods, such as flights, upgrades, etc.\nIn learning and performance management you can often earn badges and titles, which effectively are virtual goods, they have no meaning other than in your context. In some organisations earning of virtual goods can be used to be offset against additional time off, benefits and other items the employee may opt-in and choose for.",
            core.img,
            core.fill);

        
        let actual: Character = playerService.getActual();
        actual.badge = "../assets/img/challenge/badges/trident.png";
        actual.effect = 2;
        actual.multiplier = 15;
        actual.change = true;
        let allPlayers:Character[]=[];
        allPlayers.push(Object.assign({},actual));
        this.test = new SelectPlayer(allPlayers,playerService.getActual(), "Virtual goods!: "+actual.nameCh, 10);
    }

}