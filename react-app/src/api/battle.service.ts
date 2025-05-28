import { Injectable } from '@nestjs/common';

export interface Pokemon {
  name: string;
  imageUrl: string;
  attack: number;
  defense: number;
  hp: number;
  speed: number;
}

@Injectable()
export class BattleService {
  simulateBattle(peleador: Pokemon, rival: Pokemon): Pokemon {
    const calculateDamage = (attack: number, defense: number): number => Math.max(attack - defense, 1);

    let peleadorHp = peleador.hp;
    let rivalHp = rival.hp;

    const peleadorGoesFirst =
      peleador.speed > rival.speed ||
      (peleador.speed === rival.speed && peleador.attack > rival.attack);

    const firstAttacker = peleadorGoesFirst ? peleador : rival;
    const secondAttacker = peleadorGoesFirst ? rival : peleador;

    let firstHp = peleadorGoesFirst ? peleadorHp : rivalHp;
    let secondHp = peleadorGoesFirst ? rivalHp : peleadorHp;

    while (firstHp > 0 && secondHp > 0) {
      secondHp -= calculateDamage(firstAttacker.attack, secondAttacker.defense);
      if (secondHp <= 0) break;
      firstHp -= calculateDamage(secondAttacker.attack, firstAttacker.defense);
    }

    return secondHp <= 0 ? firstAttacker : secondAttacker;
  }
}
