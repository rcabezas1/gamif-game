import { Component, Input, OnInit } from '@angular/core';
import { Step } from "./step";
import { StepFactoryService } from "./stepFactory.service";
import { Character } from "../characters/character";
import { ITest, Image } from "./challenge/test.interface";
import { PlayerService } from "../players/players.service";
import { ChatService } from "../chat/chat.service";

@Component({
  selector: 'step',
  templateUrl: './step.component.html',
  styleUrls: ['../app.component.css', '../animate.css'],
  providers: [StepFactoryService]
})
export class StepComponent implements OnInit {
  @Input() step: Step;
  @Input() character: Character;
  challenge: boolean = false;

  constructor(private stepService: StepFactoryService, private playerService: PlayerService, private chatService: ChatService) {
  }

  openModal() {
    this.challenge = false;
  }

  initChallenge(): void {
    this.challenge = !this.challenge;
    let test: ITest = this.step.test;
    test.initChallenge();
    this.chatService.sendInitMessage('init', null);
  }

  ngOnInit(): void {
    
  }

  selectChoice(option: Image): void {
    this.step.test.setAnswer(option.img);
    this.step.test.mostrarRespuesta();
    this.chatService.sendInitMessage('select', option.img);
  }

  sendChoice(): void {
    let id = this.playerService.getPlayers().findIndex(player => player.id === this.character.id);
    this.playerService.getPlayers()[id].score += this.step.test.getPoints();
    if(this.playerService.getPlayers()[id].effect>0){
      this.playerService.getPlayers()[id].score +=  this.playerService.getPlayers()[id].multiplier;
      this.playerService.getPlayers()[id].effect--;
      this.playerService.getPlayers()[id].change=true;
      if(this.playerService.getPlayers()[id].effect==0){
        this.playerService.getPlayers()[id].badge = null;
      }
    }
    this.playerService.nextActive();
    this.chatService.sendNextMessage(id);
    this.playerService.getActual().change = true;
    this.updateEffect();
  }

  updateEffect(){
    let players:Character[] = this.playerService.getPlayers();
    for (var index = 0; index < players.length; index++) {
      var player = players[index];
      if(player.change){
        player.change = false;
        this.chatService.sendScoreMessage(player);
      }
      
    }
  }

  closeSelect() {
    this.step.test.mostrarRespuesta();
  }

  closeStep(){
    this.chatService.sendInitMessage('close', null);
  }
}
