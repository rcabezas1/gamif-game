import { ITest, MAX_POINTS, Image } from "./test.interface";
import { AbstractChallenge } from "./abstract-challenge";
import { Character } from "../../characters/character";
import { StepUtil } from "./step-util";

let ANSWERS: Image[] = [
    { img: "../assets/img/challenge/answer/yes.png", class: "hidden" },
    { img: "../assets/img/challenge/answer/no.png", class: "hidden" },
]

export class SelectPlayer extends AbstractChallenge {
    players: Character[];
    actual: Character;
    answers: Image[];
    answer: Image;
    answerClass: string;

    private description: string;
    private points: number = 0;
    private mostRes: boolean = true;

    constructor(players: Character[], actual: Character, description: string, remaining: number) {
        super(remaining);
        this.description = description;
        this.players = players;
        this.actual = actual;
        this.answers = ANSWERS;
        this.answer = ANSWERS[1];
        StepUtil.hideAnswers(this.answers);
    }

    getInstance(): any {
        return this;
    }


    initChallenge(): void {
        this.answer = ANSWERS[1];
        let indPlayer = this.players.findIndex(player=>this.actual.id == player.id)
        if(indPlayer>=0){
            this.answer = ANSWERS[0];
        }
        StepUtil.displayChoices.call(this, this.players,
            "animated tada list-group",
            "animated rollOut list-group",
            this.showAnswer);
        
    }

    showAnswer() {
        let delay = 10;
        this.answerClass = "col-xs-12";
        setTimeout(() => {
            this.mostrarRespuesta();
        }, delay);
    }

    mostrarRespuesta(): void {
        if (this.mostRes) {
            this.mostRes = false;
            this.remaining = 0;
            this.remainingStr = "0%";
            setTimeout(() => {
                this.answer.class = "img-responsive animated rubberBand";
                this.setAnswer();
            }, 2000);

        }

    }

    setAnswer() {
        if (this.indexAnswer(this.answer.img) === this.indexAnswer(ANSWERS[0].img)) {
            this.points = MAX_POINTS;
        }
    }

    getType(): string {
        return "Select Player";
    }

    getDescription(): string {
        return this.description;
    }

    getPoints(): number {
        return this.points;
    }
}