import { Step } from "../step";
import { CORES, Core } from "../../board/technique";
import { Multiple } from "../challenge/multiple";

const core: Core = CORES[6];

export class AppointmentDynamics extends Step {
    constructor() {
        super(core,
            "-Appointment Dynamics",
            "Utilize a formerly declared, or reoccurring time where users have to take the Desired Actions to effectively reach the Win-State.",
            core.img,
            core.fill);
        let options: string[] = [
            "../assets/img/challenge/15/a.png",
            "../assets/img/challenge/15/b.png",
            "../assets/img/challenge/15/c.png"
        ]
        this.test = new Multiple(options, "c.png", 10, "Choose option image NOT applicable");
    }

}