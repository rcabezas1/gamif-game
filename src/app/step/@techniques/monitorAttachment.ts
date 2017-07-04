import { Step } from "../step";
import { CORES, Core } from "../../board/technique";
import { Single } from "../challenge/single";

const core: Core = CORES[7];

export class MonitorAttachment extends Step {
    constructor() {
        super(core,
            "-Monitor Attachment",
            "User have scores that monitor its current resources or points.",
            core.img,
            core.fill);
        let options: string[] = [
            "../assets/img/challenge/14/a.png",
        ]
        this.test = new Single(options, "3.png", 10, 4, "Choose option from image");
    }

}