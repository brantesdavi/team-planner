import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.interface';

@Component({
  selector: 'app-dex-card',
  templateUrl: './dex-card.component.html',
  styleUrls: ['./dex-card.component.scss']
})
export class DexCardComponent {

  @Input() pokemon: Pokemon | undefined;

}
