import { Injectable, Inject } from '@angular/core';
import { Step } from "./step";
import { PlayerService } from "../players/players.service";

import { AnticipationParade } from "./@techniques/anticipationParade";
import { AppointmentDynamics } from "./@techniques/appointmentDynamics";
import { AuraEffect } from "./@techniques/auraEffect";
import { Badges } from "./@techniques/badges";
import { BeginnersLuck } from "./@techniques/beginnerLuck";
import { Booster } from "./@techniques/boosters";
import { BuildFromScratch } from "./@techniques/buildFromScratch";
import { CountDownTimer } from "./@techniques/countdownTimer";
import { Crowning } from "./@techniques/crowning";
import { DesertOasis } from "./@techniques/desertOasis";
import { DestinyChild } from "./@techniques/destinyChild";
import { FixedRewards } from "./@techniques/fixedRewards";
import { HighFive } from "./@techniques/higFive";
import { HumanityHero } from "./@techniques/humanityHero";
import { Leaderboard } from "./@techniques/leaderboard";
import { MonitorAttachment } from "./@techniques/monitorAttachment";
import { PoisonPicker } from "./@techniques/poisonPicker";
import { ProgressBar } from "./@techniques/progressBar";
import { Protection } from "./@techniques/protection";
import { QuestLists } from "./@techniques/questLists";
import { RandomRewards } from "./@techniques/randomRewards";
import { ScarletLetter } from "./@techniques/scarletLetter";
import { SocialProud } from "./@techniques/socialProud";
import { StatusPoint } from "./@techniques/statusPoint";
import { StatusQuo } from "./@techniques/statusQuo";
import { StepByStep } from "./@techniques/stepByStep";
import { SunkCostPrision } from "./@techniques/sunkCostPrision";
import { TortureBrakes } from "./@techniques/tortureBreakes";
import { VirtualGoods } from "./@techniques/virtualGoods";

@Injectable()
export class StepFactoryService {
    playerService: PlayerService
    constructor( @Inject(PlayerService) playerService: PlayerService) {
        this.playerService = playerService;
    }
    createStep(id: string): Step {
        let step: Step = null;
        switch (id) {
            case "-Anticipation Parade": step = new AnticipationParade(); break;
            case "-Appointment Dynamics": step = new AppointmentDynamics(); break;
            case "-Aura Effect": step = new AuraEffect(this.playerService); break;
            case "-Badges (Achievement Symbols)": step = new Badges(); break;
            case "-Beginners Luck": step = new BeginnersLuck(this.playerService); break;
            case "-Boosters": step = new Booster(this.playerService); break;
            case "-Build From Scratch": step = new BuildFromScratch(); break;
            case "-CountDown Timer": step = new CountDownTimer(); break;
            case "-Crowning": step = new Crowning(this.playerService); break;
            case "-Desert Oasis": step = new DesertOasis(); break;
            case "-Destiny Child": step = new DestinyChild(this.playerService); break;
            case "-Fixed Action Rewards (Earned Lunch)": step = new FixedRewards(); break;
            case "-High Five": step = new HighFive(this.playerService); break;
            case "-Humanity Hero": step = new HumanityHero(); break;
            case "-Leaderboard": step = new Leaderboard(this.playerService); break;
            case "-Monitor Attachment": step = new MonitorAttachment(); break;
            case "-Poison Pickers": step = new PoisonPicker(); break;
            case "-Progress Bar": step = new ProgressBar(); break;
            case "-Protection": step = new Protection(); break;
            case "-Quest Lists": step = new QuestLists(); break;
            case "-Random Rewards": step = new RandomRewards(this.playerService); break;
            case "-Scarlet Letter": step = new ScarletLetter(this.playerService); break;
            case "-Social Proud": step = new SocialProud(); break;
            case "-Status Points": step = new StatusPoint(); break;
            case "-Status Quo Sloth": step = new StatusQuo(this.playerService); break;
            case "-Step-by-Step Overlay Tutorial": step = new StepByStep(); break;
            case "-Sunk Cost Prision": step = new SunkCostPrision(); break;
            case "-Torture Breaks": step = new TortureBrakes(); break;
            case "-Virtual Goods": step = new VirtualGoods(this.playerService); break;
            default:
                break;
        }

        return step;

    }

}
