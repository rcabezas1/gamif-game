import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Character, SELECT } from "../characters/character";
import { Game } from "../game/game";
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {
    private url = 'http://localhost:5000';
    //private url = 'http://cd54ce9b.ngrok.io';
    private socket;

    sendInitMessage(message, obj) {
        this.initSocket();
        var send = {id:message,object:obj};
        this.socket.emit('init-challenge', send);
    }

    getInitMessages() {
        return this.getMessage('init-challenge');
    }

    sendNextMessage(message: any) {
        this.initSocket();
        this.socket.emit('next-player', message);
    }

    getNextMessages() {
        return this.getMessage('next-player');
    }


    sendCharacterMessage(message: Character) {
        this.initSocket();
        this.socket.emit('insert-player', message);
    }

    sendGameMessage(message: Game) {
        this.initSocket();
        this.socket.emit('game', message);
    }

    getGameMessages() {
        return this.getMessage('game');
    }

    getPlayersMessages() {
        return this.getMessage('insert-player');
    }

    requestAllPlayer(){
        this.initSocket();
        this.socket.emit('all-characters');
    }

    requestPlayers(){
        this.initSocket();
        this.socket.emit('all-players');
    }

    updatePlayers(players){
        this.initSocket();
        this.socket.emit('all-players',players);
    }

    getAllCharacterMessages() {
        this.initSocket();
        return this.getMessage('all-characters');
    }

    initSocket() {
        if (!this.socket) {
            this.socket = io(this.url);
        }
    }

    private getMessage(message: string) {
        let observable = new Observable(observer => {
            this.initSocket();
            this.socket.on(message, (data) => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        })
        return observable;
    }

}