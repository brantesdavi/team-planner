import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamCardComponent } from './team-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    TeamCardComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    TeamCardComponent
  ]
})
export class TeamCardModule { }
