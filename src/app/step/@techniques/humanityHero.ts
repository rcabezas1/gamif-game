import { Step } from "../step";
import { CORES, Core } from "../../board/technique";
import { Multiple } from "../challenge/multiple";

const core: Core = CORES[0];

export class HumanityHero extends Step {
    constructor() {
        super(core,
            "-Humanity Hero",
            "If you can incorporate a world mission into your offerings, you can gain even more buy-in during the on-boarding process. The way this works is to tie the actions you want people to take to something that will make the world a better place.",
            core.img,
            core.fill);
        let options: string[] = [
            "../assets/img/challenge/18/a.png",
            "../assets/img/challenge/1/b.png",
            "../assets/img/challenge/2/c.png"
        ]
        this.test = new Multiple(options, "1.png", 10, "Choose most accurate image option");
    }

}