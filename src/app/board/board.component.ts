import { Component, OnInit, HostListener } from '@angular/core';
import { Technique, CORES, Core } from "./technique";
import { Character, CharacterGroup } from "../characters/character";
import { Step } from "../step/step";
import { BoardService } from "./board.service";
import { CharacterUtil } from "../characters/character.util";
import { StepFactoryService } from "../step/stepFactory.service";
import { ChatService } from "../chat/chat.service";
import { PlayerService } from "../players/players.service";
import { Game } from "../game/game";

@Component({
  selector: 'board-detail',
  templateUrl: './board.component.html',
  styleUrls: ['../app.component.css', '../animate.css'],
  providers: [BoardService, StepFactoryService]
})
export class BoardComponent implements OnInit {
  characters: Character[];
  charactersGroup: CharacterGroup[];
  CORES: Core[] = CORES;
  steps: Technique[];
  actual: Character;
  current: Character;
  step: Step;
  porcentStr: string;
  height: string;
  private porcent: number;
  private stepPorcent: number;

  constructor(private boardService: BoardService, private stepFService: StepFactoryService, private playerService: PlayerService, private chatService: ChatService) {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.height = this.boardService.sortBoardSteps(this.steps, window.innerWidth) + "px";
  }

  ngOnInit(): void {
    this.steps = this.boardService.getBoardSteps();
    this.porcent = 0;
    this.stepPorcent = 100 / this.steps.length
    this.porcentStr = this.porcent + '%'
    let fix = 50;
    this.height = (this.boardService.sortBoardSteps(this.steps, window.innerWidth)+fix)+"px";
    this.characters = [];
    this.charactersGroup = [];
    this.listenPlayers();
    this.listenChoice();
  }

  listenPlayers(){
    this.chatService.getPlayersMessages().subscribe((message: any) => {
            this.characters = message;
            this.playerService.setPlayers(this.characters);
            this.charactersGroup = CharacterUtil.groupCharacters(this.characters, 2);         
        });
  }

   listenChoice(){
    this.chatService.getInitMessages().subscribe(message => {
      let obj:any = message;
      if (obj.id === 'init') {
        document.getElementById("initChallenge").click();
      } else if (obj.id === 'select') {
        this.step.test.setAnswer(obj.object);
        document.getElementById("closeSelect").click();
      }
    });
  }

  click(technique: Technique) {
    this.current = this.playerService.getActual();
    technique.class = "animated hinge";
    this.step = this.stepFService.createStep(technique.id);
    if (this.step != null && !technique.done) {
      this.porcent += this.stepPorcent;
      this.porcentStr = this.porcent + '%';
      technique.done = true;
      let game: Game = new Game();
      game.player = this.playerService.getActual();
      game.step = this.step;
      game.percentage = this.porcentStr;
      this.chatService.sendGameMessage(game);
    }

    setTimeout(() => {
      technique.class = "animated " + this.playerService.getActual().animation;
      technique.fillId = "url(#" + this.playerService.getActual().id + ")";
      setTimeout(() => {
        document.getElementById("openModal").click();
      }, 1000);
    }, 2000);
  }
}
