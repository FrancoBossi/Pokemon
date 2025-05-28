import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Fight } from './fights.entity';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FightService {
  constructor(
    @InjectRepository(Fight)
    private readonly fightRepository: Repository<Fight>,
  ) {}

  async saveFight(winner: string, loser: string): Promise<Fight> {
    const fight = this.fightRepository.create({
      id: uuidv4(),
      winner,
      loser,
    });

    return this.fightRepository.save(fight);
  }

  findAll(): Promise<Fight[]> {
    return this.fightRepository.find();
  }
}
