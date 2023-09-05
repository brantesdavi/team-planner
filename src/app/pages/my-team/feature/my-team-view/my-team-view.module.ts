import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTeamViewComponent } from './my-team-view.component';
import { PokemonListModule } from '../../ui/pokemon-list/pokemon-list.module';
import { TeamListModule } from '../../ui/team-list/team-list.module';



@NgModule({
  declarations: [
    MyTeamViewComponent
  ],
  imports: [
    CommonModule,
    PokemonListModule,
    TeamListModule
  ],
  exports: [
    MyTeamViewComponent
  ]
})
export class MyTeamViewModule { }
