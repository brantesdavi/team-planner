import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list.component';
import { TeamCardModule } from '../../shared/team-card/team-card.module';
import { DexCardModule } from '../../shared/dex-card/dex-card.module';
import { ComboBoxModule } from '../../shared/combo-box/combo-box.module';



@NgModule({
  declarations: [
    PokemonListComponent
  ],
  imports: [
    CommonModule,
    TeamCardModule,
    DexCardModule,
    ComboBoxModule
  ],
  exports: [
    PokemonListComponent
  ]
})
export class PokemonListModule { }
