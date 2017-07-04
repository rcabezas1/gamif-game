export const TIME: number = 5000;
export const SEG: number = 1000;

export class StepUtil {
    static displayChoices(array: any[], showClass: string, hideClass: string, callback: Function) {
        let mult = 1;
        if(array.length==1){
            mult = 2;
        }
        for (let index = 0; array && index < array.length; index++) {
            let option = array[index];
            option.class = "hidden";
            setTimeout(() => {
                option.class = showClass;
            }, TIME * index);
            setTimeout(() => {
                option.class = hideClass;
                setTimeout(() => {
                    option.class = "hidden";
                    if (index == array.length - 1) {
                        callback.call(this);
                    }
                }, 320);
            }, TIME * (index + 1) * mult);
        }
    }


    static hideAnswers(array:any):void{
        for (let index = 0; array && index < array.length; index++) {
            let option = array[index];
            option.class = "hidden";
        }

    }
}