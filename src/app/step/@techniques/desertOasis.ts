import { Step } from "../step";
import { CORES, Core } from "../../board/technique";
import { Single } from "../challenge/single";

const core: Core = CORES[1];

export class DesertOasis extends Step {
    constructor() {
        super(core,
            "-Desert Oasis",
            "Where visually nothing else is present besides the main Desire Action. The Desert Oasis looks green and juicy, and it subconsciously suggests that there is a Win-State behind this option.",
            core.img,
            core.fill);
        let options: string[] = [
            "../assets/img/challenge/6/a.png",
        ]
        this.test = new Single(options, "3.png", 10, 3, "Choose option from image");
    }

}