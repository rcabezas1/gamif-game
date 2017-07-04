import { Step } from "../step";
import { CORES, Core } from "../../board/technique";
import { Multiple } from "../challenge/multiple";

const core: Core = CORES[1];

export class AnticipationParade extends Step {
    constructor() {
        super(core,
            "-Anticipation Parade",
            "Ever gotten that suspiciously warm feeling just before you’ve reached the finish line. The Anticipation Parade is all about that sensation reward after getting closer to a win-state (“you’re almost there!”). The Anticipation Parade can be effectively combo’d with Last Mile Drive or a Progress Bar.",
            core.img,
            core.fill);
        let options: string[] = [
            "../assets/img/challenge/9/a.png",
            "../assets/img/challenge/9/b.png",
            "../assets/img/challenge/9/c.png"
        ]
        this.test = new Multiple(options, "3.png", 10, "Choose option image NOT applicable");
    }

}