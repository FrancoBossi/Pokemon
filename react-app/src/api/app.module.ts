// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './pokemon.entity';
import {Fight} from './fights.entity';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { FightService } from './fights.service';
import { BattleController } from '../api/battle.controller';
import { BattleService } from '../api/battle.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'pokemon.db',
      entities: [Pokemon, Fight],
      // entities: [__dirname + '/**/*.entity{.ts,.js}'], // alternativa para cargar todas las entidades
      synchronize: true,   // solo en desarrollo
    }),
    TypeOrmModule.forFeature([Pokemon, Fight]),
  ],
  controllers: [PokemonController, BattleController],
  providers: [PokemonService, BattleService, FightService],
})
export class AppModule {}
