// src/api/battle.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { BattleService, Pokemon } from './battle.service';
import { FightService } from './fights.service';

@Controller('battle')
export class BattleController {
  constructor(
    private readonly battleService: BattleService,
    private readonly fightService: FightService,
  ) {}

  @Post()
  async battle(@Body() body: { peleador: Pokemon; rival: Pokemon }) {
    const { peleador, rival } = body;
    const winner = this.battleService.simulateBattle(peleador, rival);
    const loser = winner.name === peleador.name ? rival : peleador;

    // Guardar en DB
    await this.fightService.saveFight(winner.name, loser.name);

    return { winner };
  }
}


