import { ITest } from "./challenge/test.interface";
import { Core } from "../board/technique";
export abstract class Step{
    constructor(core:Core,id:string,description:string,img:string,fill:string){
        this.core=core;
        this.id=id;
        this.description=description;
        this.img=img;
        this.fill= fill;
    }
    private core:Core;
    id:string;
    private description:string;
    private img:string;
    private fill:string;
    test:ITest;
}