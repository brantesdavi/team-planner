import { Type } from './../../../../models/pokemon.interface';
import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Observable, Subscription, map, tap } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon.interface';
import { PokemonApiService } from 'src/app/service/pokemon-api.service';

@Component({
  selector: 'app-my-team-view',
  templateUrl: './my-team-view.component.html',
  styleUrls: ['./my-team-view.component.scss']
})
export class MyTeamViewComponent implements OnInit {

  subscription: Subscription | undefined

  pokemon$: Observable<Pokemon[]> | null = null; // Inicialize como null ou um Observable vazio
  pokemonList: Pokemon[]= [];
  pokemonTeam: Pokemon[] = []
  gameList: any[]= [];

  gameTitle: string = '';

  selectedGame: string= '';
  type$: any[] = [];

  constructor(
    private pokemonService: PokemonApiService
  ){}

  ngOnInit(){
    // this.getPokemonInfo(2);
    // this.getGames();
    this.getNewPokemon(1);
    this.getGameList();
    this.getPokemonGame(1)
  }

  getSelect(op: any): number{
    if(typeof op === 'number'){
      return op
    }
    else{
      const selectedValue:number = op.target.value;
      this.selectedGame = op.target;
      return selectedValue
    }
  }

  getPokemonGame(gameId: number): void{
    this.pokemonService.getGame(gameId)
    .subscribe({
      next: (res) => {
        this.gameTitle = res.game.nome
      }
    })
  }

  getNewPokemon(numGame: any): void{
    this.pokemonList = []
    this.pokemonTeam = []

    const select = this.getSelect(numGame)

    this.getPokemonGame(select)
    this.pokemonService.getDex(select)
    .subscribe({
      next: (res) => {
        this.pokemonList = []
        for(let i=0;i < res.pokemonDoJogo.length; i++){
          const pokemon: Pokemon = {
            id: res.pokemonDoJogo[i].id,
            name: res.pokemonDoJogo[i].nome,
            sprites: {
              normal: res.pokemonDoJogo[i].imagens.normal,
              shiny: res.pokemonDoJogo[i].imagens.shiny,
              menu: res.pokemonDoJogo[i].imagens.menu,
            }
            ,
            types: {
              type_1: res.pokemonDoJogo[i].types.typeId_1,
              type_2: res.pokemonDoJogo[i].types.typeId_2 ? res.pokemonDoJogo[i].types.typeId_2: null
            },
            forms: res.pokemonDoJogo[i].forms ? res.pokemonDoJogo[i].forms : null

          };
          this.pokemonList.push(pokemon)
          console.log(pokemon)
        }
      }
    })
  }

  getType(typeID: number): any{
    return this.pokemonService.getType(typeID)
      .pipe(
        map(type => [{
          id: type.id,
          name: type.name,
          icon: type.icon,
          color: type.color
        }])
      )
  }

  getGameList(): void{
    this.pokemonService.getGames()
    .subscribe({
      next: (res) => {
        for(let i=0;i < res.jogoData.length; i++){
          const game = {
            id: res.jogoData[i].id,
            name: res.jogoData[i].nome,
            region: res.jogoData[i].regiao,
          };
          this.gameList.push(game)
        }
      }
    })
  }
}
