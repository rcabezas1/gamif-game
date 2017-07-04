import { Step } from "../step";
import { CORES, Core } from "../../board/technique";
import { Single } from "../challenge/single";

const core: Core = CORES[7];

export class Protection extends Step {
    constructor() {
        super(core,
            "-Protection",
            "When user have resources and they need to protect them.",
            core.img,
            core.fill);
        let options: string[] = [
            "../assets/img/challenge/13/a.png",
        ]
        this.test = new Single(options, "3.png", 10, 3, "Choose option from image");
    }

}