import { Step } from "../step";
import { CORES, Core } from "../../board/technique";
import { Multiple } from "../challenge/multiple";

const core: Core = CORES[1];

export class PoisonPicker extends Step {
    constructor() {
        super(core,
            "-Poison Pickers",
            "Many studies have shown that people like something more when they are given a choice, even if the options are not as appealing compared to a single better option.",
            core.img,
            core.fill);
        let options: string[] = [
            "../assets/img/challenge/20/a.png",
            "../assets/img/challenge/20/b.png",
        ]
        this.test = new Multiple(options, "1.png", 10, "Choose one image option");
    }

}