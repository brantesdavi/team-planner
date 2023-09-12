import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.interface';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit, OnChanges {

  @Input() pokemonList: Pokemon[] = []

  @Input() pokemonTeam: Pokemon[] = [];

  @Input() pokemonGame: string | undefined;

  @Input() gameTitle: string ="aa";


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

  ngOnChanges(){
    this.pokemonTeam = []

  }


}
