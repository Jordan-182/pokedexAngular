import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found';
import { PokemonEdit } from './pokemon/pokemon-edit/pokemon-edit';
import { PokemonList } from './pokemon/pokemon-list/pokemon-list';
import { PokemonProfile } from './pokemon/pokemon-profile/pokemon-profile';

const routes: Routes = [
  {
    path: 'pokemons/edit/:id',
    component: PokemonEdit,
    title: 'Pokémon',
  },
  { path: 'pokemons/:id', component: PokemonProfile, title: 'Pokémon' },
  { path: 'pokemons', component: PokemonList, title: 'Pokédex' },
  { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, title: 'Page introuvable' },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
  ],
};
