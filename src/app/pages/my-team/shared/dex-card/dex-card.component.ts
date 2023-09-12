import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.interface';

@Component({
  selector: 'app-dex-card',
  templateUrl: './dex-card.component.html',
  styleUrls: ['./dex-card.component.scss']
})
export class DexCardComponent implements OnInit{

  @Input() pokemon: Pokemon | undefined;

  ngOnInit(): void {
    console.log(this.pokemon)
  }


}
