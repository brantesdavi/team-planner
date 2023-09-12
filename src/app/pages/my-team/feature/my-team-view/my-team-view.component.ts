import { Type } from './../../../../models/pokemon.interface';
import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Observable, Subscription, map, of, switchMap, tap } from 'rxjs';
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

  getNewPokemon(numGame: any): void {
    this.pokemonList = [];
    this.pokemonTeam = [];

    const select = this.getSelect(numGame);

    this.getPokemonGame(select);
    this.pokemonService.getDex(select).subscribe({
      next: (res) => {
        this.pokemonList = [];
        for (let i = 0; i < res.pokemonDoJogo.length; i++) {
          const typeId_1 = res.pokemonDoJogo[i].types.typeId_1;
          const typeId_2 = res.pokemonDoJogo[i].types.typeId_2;

          // Use switchMap para obter o valor real do tipo 1
          this.getType(typeId_1).pipe(
            switchMap(type1 => {
              // Se typeId_2 não for nulo, também obtenha o valor real do tipo 2
              if (typeId_2) {
                return this.getType(typeId_2).pipe(
                  map(type2 => ({
                    id: res.pokemonDoJogo[i].id,
                    name: res.pokemonDoJogo[i].nome,
                    sprites: {
                      normal: res.pokemonDoJogo[i].imagens.normal,
                      shiny: res.pokemonDoJogo[i].imagens.shiny,
                      menu: res.pokemonDoJogo[i].imagens.menu,
                    },
                    types: {
                      type_1: type1,
                      type_2: type2,
                    },
                  }))
                );
              } else {
                // Se typeId_2 for nulo, retorne apenas o valor do tipo 1
                return of({
                  id: res.pokemonDoJogo[i].id,
                  name: res.pokemonDoJogo[i].nome,
                  sprites: {
                    normal: res.pokemonDoJogo[i].imagens.normal,
                    shiny: res.pokemonDoJogo[i].imagens.shiny,
                    menu: res.pokemonDoJogo[i].imagens.menu,
                  },
                  types: {
                    type_1: type1,
                    type_2: null,
                  },
                });
              }
            })
          ).subscribe(pokemon => {
            this.pokemonList.push(pokemon);
            console.log(pokemon);
          });
        }
      }
    });
  }

  getType(typeID: number): Observable<any> {
    return this.pokemonService.getType(typeID).pipe(
      map(res => ({
        id: res.type.id,
        name: res.type.name,
        icon: res.type.icon,
        color: res.type.color
      }))
    );
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
