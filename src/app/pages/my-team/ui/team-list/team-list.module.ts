import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamListComponent } from './team-list.component';
import { TeamCardModule } from '../../shared/team-card/team-card.module';



@NgModule({
  declarations: [
    TeamListComponent
  ],
  imports: [
    CommonModule,
    TeamCardModule
  ],
  exports: [
    TeamListComponent
  ],
})
export class TeamListModule { }
