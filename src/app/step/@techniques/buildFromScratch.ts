import { Step } from "../step";
import { CORES, Core } from "../../board/technique";
import { Multiple } from "../challenge/multiple";

const core: Core = CORES[7];

export class BuildFromScratch extends Step {
    constructor() {
        super(core,
            "-Build From Scratch",
            "Building from scratch means that instead of giving them the entire setup – giving them the fully furnished house and the character from the beginning, you want them to start off decorating the house from scratch; pick and place the beds in the house for themselves; choose a hair color and style for their character; and select their preferred fashion statement. As I said earlier, when people are building something from scratch, they feel like, “I own this. This is my thing.”",
            core.img,
            core.fill);
        let options: string[] = [
            "../assets/img/challenge/11/a.png",
            "../assets/img/challenge/9/b.png",
            "../assets/img/challenge/9/c.png",
            "../assets/img/challenge/badges/all.png"
        ]
        this.test = new Multiple(options, "4.png", 10, "Choose most accurate image option");
    }

}