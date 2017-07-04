import { ITest, MAX_POINTS, Image } from "./test.interface";
import { AbstractChallenge } from "./abstract-challenge";
import { StepUtil,TIME,SEG } from "./step-util";

let ANSWERS: Image[] = [
    { img: "../assets/img/challenge/answer/1.png", class: "hidden" },
    { img: "../assets/img/challenge/answer/2.png", class: "hidden" },
    { img: "../assets/img/challenge/answer/3.png", class: "hidden" },
    { img: "../assets/img/challenge/answer/4.png", class: "hidden" },
    { img: "../assets/img/challenge/answer/5.png", class: "hidden" },
]

export class Multiple extends AbstractChallenge {
    choices: Image[];
    answers: Image[];
    answerClass: string;
    description: string;

    private correct: string;
    private points: number = 0;
    private mostRes: boolean = true;

    constructor(choices: string[], correct: string, remaining: number, description:string) {
        super(remaining);
        this.correct = correct;
        this.choices = [];
        this.answers = ANSWERS;
        this.description = description;
        StepUtil.hideAnswers(this.answers);
        choices.forEach(choice => {
            this.choices.push(new Image(choice));
        });
        
    }

    getInstance(): any {
        return this;
    }

    initChallenge(): void {
        StepUtil.hideAnswers(this.answers);
        StepUtil.displayChoices.call(this,this.choices, 
        "img-responsive animated tada", 
        "img-responsive animated rollOut", 
        this.showAnswers);
    }

    showAnswers(): void {
        let delayTime = 10;
        this.answerClass = "col-xs-" + (12 / this.getAnswersLength());
        for (let index = 0; index < this.answers.length; index++) {
            let option = this.answers[index];
            option.class = "hidden";
            if (index < this.getAnswersLength()) {
                option.class = "img-responsive animated rubberBand answer";
                if(index==0){
                    this.descontar();
                }
            }
        }
    }

    getAnswersLength(): number {
        return this.choices.length;
    }

    mostrarRespuesta(): void {
        if (this.mostRes) {
            this.mostRes = false;
            this.remaining = 0;
            this.remainingStr = "0%";
            setTimeout(() => {
                for (let index = 0; index < this.answers.length; index++) {
                    let option = this.answers[index];
                    option.class = "hidden";
                    if (index < this.getAnswersLength()) {
                        if (this.indexAnswer(option.img) === this.correct) {
                            setTimeout(() => {
                                option.class = "img-responsive animated tada";
                            }, SEG*2);
                        }
                    }
                }
            }, SEG);
        }
    }


    setAnswer(answer: string) {
        answer = this.indexAnswer(answer);
        if (answer === this.correct) {
            this.points = MAX_POINTS;
        }
    }

    getType(): string {
        return "Choose Image";
    }

    getDescription(): string {
        return this.description;
    }

    getPoints(): number {
        return this.points;
    }
}