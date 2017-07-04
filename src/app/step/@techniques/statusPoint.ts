import { Step } from "../step";
import { CORES, Core } from "../../board/technique";
import { Multiple } from "../challenge/multiple";

const core: Core = CORES[1];

export class StatusPoint extends Step {
    constructor() {
        super(core,
            "-Status Points",
            "Where users see in a score keeping sense how well they are doing. Status Points for the most part can only go up as the user hits more Win-States and it cannot be traded for other valuables.",
            core.img,
            core.fill);
        let options: string[] = [
            "../assets/img/challenge/1/a.png",
            "../assets/img/challenge/1/b.png",
            "../assets/img/challenge/1/c.png"
        ]
        this.test = new Multiple(options, "2.png", 10, "Choose most accurate image option");
    }

}