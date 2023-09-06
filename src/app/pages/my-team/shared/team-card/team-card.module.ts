import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamCardComponent } from './team-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TypeTagModule } from './shared/type-tag/type-tag.module';


@NgModule({
  declarations: [
    TeamCardComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    TypeTagModule
  ],
  exports: [
    TeamCardComponent
  ]
})
export class TeamCardModule { }
