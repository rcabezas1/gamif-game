import { Injectable } from '@angular/core';
import { Technique } from "./technique";
import { TECHNIQUES } from "./mock-techniques";


@Injectable()
export class BoardService {

  cant: number;

  private shuffle(array: Technique[]): Technique[] {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  public getBoardSteps(): Technique[] {
    var tec:Technique[] = this.shuffle(TECHNIQUES);
    var tec: Technique[] = TECHNIQUES;
    return tec;
  }

  public sortBoardSteps(tec: Technique[], width: number): number {
    let i = 1;
    let space = 5;
    let cxIni = 30;
    let cyIni = 30;
    let aumFixed = 60;
    let cant = Math.ceil(width / (aumFixed + 10));
    tec.forEach(technique => {
      technique.cx = cxIni;
      technique.cy = cyIni;
      cxIni += space + aumFixed;
      if (i % cant == 0) {
        cxIni = 30;
        cyIni = cyIni += space + aumFixed;
      }
      i++;
    });
    return cyIni + space + (aumFixed/2);
  }

}
