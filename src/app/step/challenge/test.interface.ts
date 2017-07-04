export interface ITest{
    initChallenge():void;
    getPoints():number;
    getType():string;
    getDescription():string;
    setAnswer(answer:any):void;
    getInstance():any;
    mostrarRespuesta():void;
}

export const MAX_POINTS=50;

export class Image {
    constructor(img: string) {
        this.img = img;
        this.class = "option";
    }
    img: string;
    class: string;
}