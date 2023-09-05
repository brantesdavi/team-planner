import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list.component';
import { TeamCardModule } from '../../shared/team-card/team-card.module';



@NgModule({
  declarations: [
    PokemonListComponent
  ],
  imports: [
    CommonModule,
    TeamCardModule
  ],
  exports: [
    PokemonListComponent
  ]
})
export class PokemonListModule { }
