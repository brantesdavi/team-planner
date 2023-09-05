import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTeamComponent } from './my-team.component';
import { TeamCardModule } from 'src/app/components/team-card/team-card.module';



@NgModule({
  declarations: [
    MyTeamComponent
  ],
  imports: [
    CommonModule,
    TeamCardModule
  ],
  exports: [
    MyTeamComponent
  ]
})
export class MyTeamModule { }
