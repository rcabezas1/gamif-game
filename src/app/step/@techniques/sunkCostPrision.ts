import { Step } from "../step";
import { CORES, Core } from "../../board/technique";
import { Multiple } from "../challenge/multiple";

const core: Core = CORES[5];

export class SunkCostPrision extends Step {
    constructor() {
        super(core,
            "-Sunk Cost Prison",
            "Is a designed scenario where users will suffer ALL progress and possessions in the system if they quit the system.",
            core.img,
            core.fill);
        let options: string[] = [
            "../assets/img/challenge/19/a.png",
            "../assets/img/challenge/19/b.png",
            "../assets/img/challenge/19/c.png"
        ]
        this.test = new Multiple(options, "3.png", 10, "Choose most accurate image option");
    }

}