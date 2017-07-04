import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from "../chat/chat.service";
import { Game } from "./game";
import { Step } from "../step/step";
import { StepFactoryService } from "../step/stepFactory.service";
import { PlayerService } from "../players/players.service";
import { Character } from "../characters/character";

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['../app.component.css', '../animate.css'],
  providers: [StepFactoryService]
})
export class GameComponent implements OnInit {
  title: string = "Game";
  player: Character;
  porcentStr: string = "0%";
  current: Character;
  step: Step;
  constructor(private chatService: ChatService, private playerService: PlayerService, private stepFService: StepFactoryService) {
  }

  ngOnInit(): void {
    this.player = this.playerService.getPlayer();
    this.gameInit();
    this.closeChoice();
    this.getNext();
    this.getScore();
  }

  gameInit() {
    this.chatService.getGameMessages().subscribe((message) => {
      let obj: any = message;
      let game: Game = obj;
      this.porcentStr = game.percentage;
      let player: Character = this.playerService.getPlayer();
      this.step = null;
      this.current = null;

      if (player && player.id === game.player.id) {
        this.step = this.stepFService.createStep(game.step.id);
        this.current = this.playerService.getActual();
        setTimeout(() => {
          if (document.getElementById("openModal")) {
            document.getElementById("openModal").click();
          }
        }, 2000);

      }
    });

  }

  closeChoice() {
    this.chatService.getInitMessages().subscribe(message => {
      let obj:any = message;
      if (obj.id === 'close') {
        if (document.getElementById("closeNoMore")) {
          document.getElementById("closeNoMore").click();
        }
      }
    });
  }

  getNext(){
    this.chatService.getNextMessages().subscribe((message)=>{
      this.playerService.nextActive();
      if(document.getElementById("closeNoMore")){
        document.getElementById("closeNoMore").click();
      }
    });
  }

  getScore():void{
    this.chatService.getScoreMessages().subscribe((message:any)=>{
      let player:Character = message;
      let ind = this.playerService.getPlayers().findIndex(elem => elem.id === player.id);
      if(ind>=0){
        this.playerService.getPlayers()[ind] = player;
        if(this.playerService.getPlayer() && this.playerService.getPlayer().id==this.playerService.getPlayers()[ind].id){
          this.playerService.getPlayer().score = player.score
        }
      }
    });
  }
}