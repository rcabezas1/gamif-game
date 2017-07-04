import { Step } from "../step";
import { CORES, Core } from "../../board/technique";
import { Multiple } from "../challenge/multiple";

const core: Core = CORES[1];

export class QuestLists extends Step {
    constructor() {
        super(core,
            "-Quest Lists",
            "They require users to perform a prescribed set of gameplay actions, following a guided path of your design. A mission, challenge, or quest might involve a single step or several steps — even as many as 20. Often, missions are about discovery or education.",
            core.img,
            core.fill);
        let options: string[] = [
            "../assets/img/challenge/5/a.png",
            "../assets/img/challenge/5/b.png",
            "../assets/img/challenge/5/c.png"
        ]
        this.test = new Multiple(options, "1.png", 10, "Choose option image NOT applicable");
    }

}