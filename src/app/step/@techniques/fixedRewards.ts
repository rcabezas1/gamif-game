import { Step } from "../step";
import { CORES, Core } from "../../board/technique";
import { Multiple } from "../challenge/multiple";

const core: Core = CORES[1];

export class FixedRewards extends Step {
    constructor() {
        super(core,
            "-Fixed Action Rewards (Earned Lunch)",
            "This is pretty straight forward – the user knows exactly what she must do to get the reward. Examples include anything that involves collecting points, frequent flyer miles, or punches on your card — in other words, loyalty programs of all flavors. With these rewards, the company lays out exactly what the customer has to do to earn something, and then gives the customer a way to track how far they’ve come along in their goal.",
            core.img,
            core.fill);
        let options: string[] = [
            "../assets/img/challenge/3/a.png",
            "../assets/img/challenge/3/b.png",
            "../assets/img/challenge/3/c.png"
        ]
        this.test = new Multiple(options, "1.png", 10,"Choose most accurate image option");
    }

}