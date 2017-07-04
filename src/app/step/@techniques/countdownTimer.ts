import { Step } from "../step";
import { CORES, Core } from "../../board/technique";
import { Multiple } from "../challenge/multiple";

const core: Core = CORES[6];

export class CountDownTimer extends Step {
    constructor() {
        super(core,
            "-Count Down Timer",
            "Is a visual display that communicates the passage of time towards a tangible event. Sometimes the Countdown Timer is to introduce the start of a great opportunity, while at other times it’s to signify the end of the opportunity.",
            core.img,
            core.fill);
        let options: string[] = [
            "../assets/img/challenge/16/a.png",
            "../assets/img/challenge/16/b.png",
            "../assets/img/challenge/16/a.png"
        ]
        this.test = new Multiple(options, "1.png", 10, "Choose most accurate image option");
    }

}