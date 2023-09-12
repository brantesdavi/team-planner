import { Component, Input, OnInit } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Pokemon } from 'src/app/models/pokemon.interface';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit {

  faPen = faPen;

  ngOnInit(){

  }


}
