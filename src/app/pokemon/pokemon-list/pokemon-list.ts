import { DatePipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { PokemonService } from '../../pokemon';
import { PokemonBorder } from '../../pokemon-border';
import { Pokemon } from '../../pokemon.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [DatePipe, PokemonBorder, RouterLink],
  templateUrl: './pokemon-list.html',
  styleUrl: '../../app.css',
})
export class PokemonList {
  private readonly pokemonService = inject(PokemonService);
  readonly pokemonList = signal(this.pokemonService.getPokemonList());
  readonly searchTerm = signal('');
  readonly displayedPokemonList = computed(() => {
    return this.pokemonList().filter((pokemon) =>
      pokemon.name.toLowerCase().includes(this.searchTerm().trim().toLowerCase())
    );
  });

  incrementLife(pokemon: Pokemon) {
    pokemon.life = pokemon.life + 1;
  }

  decrementLife(pokemon: Pokemon) {
    pokemon.life = pokemon.life - 1;
  }

  size(pokemon: Pokemon) {
    if (pokemon.life <= 15) {
      return 'Petit';
    }
    if (pokemon.life >= 25) {
      return 'Grand';
    }

    return 'Moyen';
  }
}
