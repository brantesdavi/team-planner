import { Select } from './../../../../models/pokemon.interface';
import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.interface';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  @Input()
  pokemonList: Pokemon[] = [];

  pokemonTeam: Pokemon[] = [];

  addPokemonTeam(pkm: Pokemon): void{
    if(this.pokemonTeam.length < 6){
      this.pokemonTeam.push(pkm)
      this.pokemonList = this.pokemonList.filter(objeto => objeto.id !== pkm.id);
    }
  }

  removePokemonTeam(pkm:Pokemon): void{
    this.pokemonList.push(pkm)
    this.pokemonTeam = this.pokemonTeam.filter(objeto => objeto.id !== pkm.id);
  }

  ngOnInit() {
  }


}
