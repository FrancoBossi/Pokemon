import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pokemon } from './pokemon.entity';
import { Repository } from 'typeorm';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class PokemonService implements OnModuleInit {
  constructor(
    @InjectRepository(Pokemon)
    private pokemonRepository: Repository<Pokemon>,
  ) {}

  async onModuleInit() {
    const count = await this.pokemonRepository.count();
    if (count === 0) {
      const dataPath = path.join(__dirname, '../components/pokemon.json');
      const raw = fs.readFileSync(dataPath, 'utf-8');
      const json = JSON.parse(raw);
      const pokemons = json.pokemon.map((p: any) => ({
        name: p.name,
        type: p.type,
        attack: p.attack,
        defense: p.defense,
        hp: p.hp,
        speed: p.speed,
        imageUrl: p.imageUrl,
      }));
      await this.pokemonRepository.save(pokemons);
      console.log('Pokemones iniciales cargados en la base de datos');
    }
  }

  findAll(): Promise<Pokemon[]> {
    return this.pokemonRepository.find();
  }

  create(pokemon: Partial<Pokemon>): Promise<Pokemon> {
    return this.pokemonRepository.save(pokemon);
  }
  
}
