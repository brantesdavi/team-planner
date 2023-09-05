import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list.component';
import { TeamCardModule } from '../../shared/team-card/team-card.module';
import { DexCardModule } from '../../shared/dex-card/dex-card.module';



@NgModule({
  declarations: [
    PokemonListComponent
  ],
  imports: [
    CommonModule,
    TeamCardModule,
    DexCardModule
  ],
  exports: [
    PokemonListComponent
  ]
})
export class PokemonListModule { }
