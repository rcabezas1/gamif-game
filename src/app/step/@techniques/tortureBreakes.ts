import { Step } from "../step";
import { CORES, Core } from "../../board/technique";
import { Multiple } from "../challenge/multiple";

const core: Core = CORES[6];

export class TortureBrakes extends Step {
    constructor() {
        super(core,
            "-Torture Breaks",
            "A Torture Break is a sudden and often triggered pause to the Desired Actions. Whereas the Appointment Dynamic is more based on absolute times where people look forward to (Every Monday morning the garbage truck will come; on July 4th when you open the app, you will get a huge bonus), Torture Breaks are often unexpected hard stops when the user is committing the Desired Action. It also often comes with a relative time-stamp based on when the break is triggered, such as “Return 5 hours from now.”",
            core.img,
            core.fill);
        let options: string[] = [
            "../assets/img/challenge/17/a.png",
            "../assets/img/challenge/17/b.png",
            "../assets/img/challenge/16/a.png"
        ]
        this.test = new Multiple(options, "2.png", 10, "Choose most accurate image option");
    }

}