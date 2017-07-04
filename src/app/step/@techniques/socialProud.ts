import { Step } from "../step";
import { CORES, Core } from "../../board/technique";
import { Single } from "../challenge/single";

const core: Core = CORES[1];

export class SocialProud extends Step {
    constructor() {
        super(core,
            "-Social Prod",
            "Is a way to tells others player about your skills or presume something. ",
            core.img,
            core.fill);
        let options: string[] = [
            "../assets/img/challenge/21/a.png",
        ]
        this.test = new Single(options, "1.png", 10, 3, "Choose option from image");
    }

}