import { Step } from "../step";
import { CORES, Core } from "../../board/technique";
import { Single } from "../challenge/single";

const core: Core = CORES[1];

export class ProgressBar extends Step {
    constructor() {
        super(core,
            "-Progress Bar",
            "Keeps tracking of user progress,  to show how close the user is to the goal.",
            core.img,
            core.fill);
        let options: string[] = [
            "../assets/img/challenge/4/a.png",
        ]
        this.test = new Single(options, "4.png", 10, 4, "Choose option from image");
    }

}