import { Step } from "../step";
import { CORES, Core } from "../../board/technique";
import { Multiple } from "../challenge/multiple";

const core: Core = CORES[1];

export class StepByStep extends Step {
    constructor() {
        super(core,
            "-Step-by-Step Overlay Tutorial",
            "Where you get the user to commit to the Desired Actions you designed, and rewarding them with small High-Fives once they accomplish it.",
            core.img,
            core.fill);
        let options: string[] = [
            "../assets/img/challenge/11/a.png",
            "../assets/img/challenge/3/b.png",
            "../assets/img/challenge/1/a.png"
        ]
        this.test = new Multiple(options, "1.png", 10, "Choose most accurate image option");
    }

}