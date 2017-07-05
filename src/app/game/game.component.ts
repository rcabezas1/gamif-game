import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from "../chat/chat.service";
import { Game } from "./game";
import { Step } from "../step/step";
import { StepFactoryService } from "../step/stepFactory.service";
import { PlayerService } from "../players/players.service";
import { Character,CharacterGroup } from "../characters/character";

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
    let characters:Character[];
    this.player = this.playerService.getPlayer();
    this.gameInit();
    this.closeChoice();
    this.getNext();
    
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
      let players = this.playerService.getPlayers();
      if(this.player && players){
        let ind = players.findIndex(current => current.id == this.player.id);
        if(ind>=0){
          this.player = players[ind];
        }
      }
      if(document.getElementById("closeNoMore")){
        document.getElementById("closeNoMore").click();
      }
    });
  }

  
}