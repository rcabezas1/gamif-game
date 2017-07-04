import { ITest, MAX_POINTS, Image } from "./test.interface";
import { TIME, SEG } from "./step-util";

let ANSWERS: Image[] = []
const DESC: number = 1;

export abstract class AbstractChallenge implements ITest {
    progressBar: string = 'active progress-bar progress-bar-striped progress-bar-danger';
    remainingStr: string;
    protected remaining: number;
    protected total: number;

    constructor(remaining:number){
        this.remaining = remaining;
        this.total = remaining;
        this.remainingStr = "100%"
    }

    protected descontar() {
        this.remaining -= DESC;
        let porcent = (this.remaining * 100) / this.total;
        if (this.remaining <= 0) {
            porcent = 0;
            this.remainingStr = porcent + "%"
            this.mostrarRespuesta();
        } else {
            this.remainingStr = porcent + "%"
            let timer = setTimeout(() => {
                this.descontar();
            }, SEG);
        }
    }

    abstract getInstance():any;

    abstract initChallenge(): void;

    abstract mostrarRespuesta(): void ;

    abstract setAnswer(answer: string):void;

    abstract getType(): string;

    abstract getDescription(): string;

    abstract getPoints(): number;

    protected indexAnswer(answer): string {
        let indSlash = answer.lastIndexOf("/") + 1;
        answer = answer.substring(indSlash, answer.length);
        return answer;
    }
}