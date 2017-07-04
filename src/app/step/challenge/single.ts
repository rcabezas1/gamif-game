import { Image } from "./test.interface";
import { Multiple } from "./multiple";
import { StepUtil } from "./step-util";

export class Single extends Multiple {
    numbChoices: number;
    
    constructor(rutas: string[], correct: string, remaining: number, numbChoices:number, description:string) {
        super(rutas,correct,remaining, description);
        this.numbChoices = numbChoices;
        StepUtil.hideAnswers(this.answers);
    }

    getAnswersLength():number{
        return this.numbChoices;
    }

    getInstance(): any {
        return this;
    }
}