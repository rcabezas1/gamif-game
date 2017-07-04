import { Step } from "../step";
import { CORES, Core } from "../../board/technique";
import { Multiple } from "../challenge/multiple";

const core: Core = CORES[1];

export class Badges extends Step {
    constructor() {
        super(core,
            "-Badges (Achievement Symbols)",
            "Achievement Symbols can come in many forms – badges, stars, belts, hats, uniforms, trophies.  Achievement Symbols merely reflect achievement, but are not achievements by themselves. The important thing about Achievement Symbols, is that they must symbolize “achievement.”",
            core.img,
            core.fill);
        let options: string[] = [
            "../assets/img/challenge/2/a.png",
            "../assets/img/challenge/2/b.png",
            "../assets/img/challenge/2/c.png"
        ]
        this.test = new Multiple(options, "3.png", 10, "Choose most accurate image option");
    }

}