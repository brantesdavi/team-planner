import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Observable, Subscription, map, tap } from 'rxjs';
import { Pokedex, Pokemon, Select } from 'src/app/models/pokemon.interface';
import { PokemonApiService } from 'src/app/service/pokemon-api.service';

@Component({
  selector: 'app-my-team-view',
  templateUrl: './my-team-view.component.html',
  styleUrls: ['./my-team-view.component.scss']
})
export class MyTeamViewComponent implements OnInit {

  subscription: Subscription | undefined


  pokemonInfoArray: Pokemon[] = [];

  games: Select[] = [
    {
      text: 'National Dex',
      value: [1]
    },
    {
      text: 'Red / Blue',
      value: [2]
    },
    {
      text: 'Silver / Gold / Crystal',
      value: [3]
    },
    {
      text: 'Ruby / Saphiere',
      value: [4]
    },
    {
      text: 'Diamond / Pearl / Platinum',
      value: [6]
    },
    {
      text: 'HeartGold / SoulSilver',
      value: [7]
    },
    {
      text: 'Black / White',
      value: [8]
    },
    {
      text: 'Black 2 / White 2',
      value: [9]
    },
    {
      text:  'X / Y',
      value: [12, 13, 14]
    },
    {
      text:  'Omega Ruby / Alpha Saphire',
      value: [15]
    },
    {
      text:  'Sun / Moon',
      value: [16, 17, 18, 19, 20]
    },
    {
      text:  'Ultra Sun / Ultra Moon',
      value: [21]
    }


  ]


  constructor(
    private pokemonService: PokemonApiService
  ){}

  ngOnInit(){
    this.getPokemonInfo(1);
    this.getGames();
  }

  getPokemonInfo(op: any): void{
    let number = 0;

    if(isNaN(op)) number = op.target.value;
    else number = op

    this.pokemonService.getDexLink(number).subscribe(res => {
      console.log(res)
      if (res && res.pokemon_species) {
        const urls = res.pokemon_species.map((entry: any) => entry.url);
        urls.forEach((url: string) => {
          this.pokemonService.getPokemonInfo(url).subscribe(pokemonInfo => {
            this.pokemonInfoArray.push(pokemonInfo);
          });
        });
      }
    });
  }

  getGames(): void{
    this.pokemonService.getGames()
    .subscribe({
      next: (games) => console.log(games)
    })
  }

  getPokemonImage(): void {
    // this.pokemon$ = this.pokemonService.getPokemonImage()
    //   .pipe(
    //     map(pkmn => [{
    //       name: pkmn.name,
    //       sprites: pkmn.sprites.front_default,
    //       types: pkmn.types
    //     }])
    //   );
  }

  ngOnDestroy(){
    this.subscription?.unsubscribe();
  }
}
