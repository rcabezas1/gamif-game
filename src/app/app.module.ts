import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { PlayersComponent } from './players/players.component';
import { GameComponent } from './game/game.component';
import { CharacterComponent } from './characters/character.component';
import { StepComponent } from './step/step.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { ChatService } from "./chat/chat.service";
import { PlayerService } from "./players/players.service";
import { Component }          from '@angular/core';


const appRoutes: Routes = [
  {
    path: 'board-game',
    component: BoardComponent
  },
  {
    path: 'select',
    component: CharacterComponent
  },
  {
    path: 'play',
    component: GameComponent
  },
  { path: '',
    redirectTo: '/select',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent, BoardComponent, CharacterComponent, StepComponent, PlayersComponent, GameComponent,
  ],
  imports: [
    NgbModule.forRoot(), BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [ChatService,PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
