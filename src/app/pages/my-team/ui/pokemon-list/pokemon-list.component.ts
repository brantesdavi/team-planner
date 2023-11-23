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

  @Input() gameTitle: string ="";


  addPokemonTeam(pkm: Pokemon): void{
    if(this.pokemonTeam.length < 6){
      this.pokemonTeam.push(pkm)
      this.pokemonList = this.pokemonList.filter(objeto => objeto.id !== pkm.id);
      const key = this.gameTitle
      this.saveTeamOnCache(key, this.pokemonTeam)
    }
  }

  removePokemonTeam(pkm:Pokemon): void{
    this.pokemonList.push(pkm)
    this.pokemonTeam = this.pokemonTeam.filter(objeto => objeto.id !== pkm.id);
  }

  saveTeamOnCache(key: string, team: Pokemon[]): void{
    try{
      const arrayJSON = JSON.stringify(team)

      localStorage.setItem(key, arrayJSON);
    } catch(er){
      console.error('Erro ao salvar o array no cache: '+er)
    }
  }

  ngOnInit() {
    const key = this.gameTitle

    const valorDoCache = localStorage.getItem(key.toString());

    // if (valorDoCache) {
    //   try {
    //     // Converta o valor do cache de volta para um array de objetos
    //     this.pokemonTeam = JSON.parse(valorDoCache);
    //   } catch (erro) {
    //     console.error('Erro ao analisar os dados do cache:', erro);
    //   }
    // }
  }

  ngOnChanges(){
    this.pokemonTeam = []

  }


}
