import { Controller, Get, Post, Body } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon.entity';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly svc: PokemonService) {}

  @Get()
  findAll(): Promise<Pokemon[]> {
    return this.svc.findAll();
  }

  @Post()
  create(@Body() dto: Partial<Pokemon>) {
    return this.svc.create(dto);
  }
}
