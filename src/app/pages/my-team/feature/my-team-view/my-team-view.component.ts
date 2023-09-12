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
  pokemonList: any[]= [];

  constructor(
    private pokemonService: PokemonApiService
  ){}

  ngOnInit(){
    // this.getPokemonInfo(2);
    // this.getGames();
    this.getNewPokemon(1);
  }



  getNewPokemon(numGame: number): void{
    this.pokemonService.getDex(numGame)
    .subscribe({
      next: (res) => {
        for(let i=0;i < res.pokemonDoJogo.length; i++){
          // console.log(res.pokemonDoJogo[i])
          const pokemon: Pokemon = {
            id: res.pokemonDoJogo[i].id,
            name: res.pokemonDoJogo[i].nome,
            sprites: {
              normal: res.pokemonDoJogo[i].imagens.normal,
              shiny: res.pokemonDoJogo[i].imagens.shiny,
              menu: res.pokemonDoJogo[i].imagens.menu,
            },
            type: {
              type_1: res.pokemonDoJogo[i].tipos[0],
              type_2: res.pokemonDoJogo[i].tipos[1] || '', // Defina um valor padrão caso type_2 não exista
            },
          };
          this.pokemonList.push(pokemon)
        }
      }
    })
  }

  // getPokemonInfo(op: any): void {
  //   let number = "";
  //   this.pokemonInfoArray = [];
  //   let urls: any[] = [];

  //   if (isNaN(op)) number = op.target.value;
  //   else number = '2';
  //   const numerosArray = number.split(",");

  //   for (let i = 0; i < numerosArray.length; i++) {
  //     this.pokemonService.getDexLink(Number(numerosArray[i])).subscribe(res => {
  //       //Pega a url de todos os Pokemon que o jogo selecionado possui
  //       if (res && res.pokemon_entries) {
  //         urls.push(res.pokemon_entries.map((entry: any) => entry.pokemon_species.url));
  //         // Verifica se todas as solicitações foram concluídas antes de processar os resultados
  //         if (urls.length === numerosArray.length) {
  //           const uniqueUrls = Array.from(new Set(urls.flat())); // Combina e remove duplicatas
  //           uniqueUrls.forEach((url: string) => {
  //             this.pokemonService.getPokemonInfo(url).subscribe(pokemonInfo => {
  //               this.pokemonInfoArray.push(pokemonInfo);
  //             });
  //           });
  //         }
  //       }
  //     });
  //   }
  // }


  // getGames(): void{
  //   this.pokemonService.getGames()
  //   // .subscribe({
  //   //   next: (games) => console.log(games)
  //   // })
  // }

  // getPokemonImage(): void {
  //   // this.pokemon$ = this.pokemonService.getPokemonImage()
  //   //   .pipe(
  //   //     map(pkmn => [{
  //   //       name: pkmn.name,
  //   //       sprites: pkmn.sprites.front_default,
  //   //       types: pkmn.types
  //   //     }])
  //   //   );
  // }

  // ngOnDestroy(){
  //   this.subscription?.unsubscribe();
  // }


  // // pokemonInfoArray: Pokemon[] = [];

  // // games: Select[] = [
  // //   {
  // //     text: 'National Dex',
  // //     value: "1"
  // //   },
  // //   {
  // //     text: 'Red / Blue',
  // //     value: "2"
  // //   },
  // //   {
  // //     text: 'Silver / Gold / Crystal',
  // //     value: "3"
  // //   },
  // //   {
  // //     text: 'Ruby / Saphiere',
  // //     value: "4"
  // //   },
  // //   {
  // //     text: 'Diamond / Pearl / Platinum',
  // //     value: "6"
  // //   },
  // //   {
  // //     text: 'HeartGold / SoulSilver',
  // //     value: "7"
  // //   },
  // //   {
  // //     text: 'Black / White',
  // //     value: "8"
  // //   },
  // //   {
  // //     text: 'Black 2 / White 2',
  // //     value: "9"
  // //   },
  // //   {
  // //     text:  'X / Y',
  // //     value: "12, 13, 14"
  // //   },
  // //   {
  // //     text:  'Omega Ruby / Alpha Saphire',
  // //     value: "15"
  // //   },
  // //   {
  // //     text:  'Sun / Moon',
  // //     value: "16,17,18,19,20"
  // //   },
  // //   {
  // //     text:  'Ultra Sun / Ultra Moon',
  // //     value: "21"
  // //   }
  // // ]
}
