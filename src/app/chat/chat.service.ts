import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Character, SELECT } from "../characters/character";
import { Game } from "../game/game";
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {
    //private url = 'http://localhost:5000';
    private url = 'http://cd54ce9b.ngrok.io';
    private socket;

    sendInitMessage(message, obj) {
        var send = {id:message,object:obj};
        this.socket.emit('init-challenge', send);
    }

    getInitMessages() {
        return this.getMessage('init-challenge');
    }

    sendScoreMessage(message: Character) {
        this.socket.emit('update-score', message);
    }


    getScoreMessages() {
        return this.getMessage('update-score');
    }


    sendNextMessage(message: any) {
        this.socket.emit('next-player', message);
    }


    getNextMessages() {
        return this.getMessage('next-player');
    }


    sendCharacterMessage(message: Character) {
        this.socket.emit('update-player', message);
    }

    sendGameMessage(message: Game) {
        this.socket.emit('game', message);
    }

    getGameMessages() {
        return this.getMessage('game');
    }

    getPlayersMessages() {
        return this.getMessage('insert-player');
    }

    getAllCharacterMessages() {
        return this.getMessage('all-characters');
    }

    getUpdateCharacterMessages() {
        return this.getMessage('update-characters');
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