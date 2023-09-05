import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Observable, Subscription, map, tap } from 'rxjs';
import { Pokedex, Pokemon } from 'src/app/models/pokemon.interface';
import { PokemonApiService } from 'src/app/service/pokemon-api.service';

@Component({
  selector: 'app-my-team-view',
  templateUrl: './my-team-view.component.html',
  styleUrls: ['./my-team-view.component.scss']
})
export class MyTeamViewComponent implements OnInit {

  subscription: Subscription | undefined


  pokemonInfoArray: Pokemon[] = [];


  constructor(
    private pokemonService: PokemonApiService
  ){}

  ngOnInit(){
    this.getPokemonInfo();
  }

  getPokemonInfo(): void{
    this.pokemonService.getDexLink().subscribe(res => {
      if (res && res.pokemon_entries) {
        const urls = res.pokemon_entries.map((entry: any) => entry.pokemon_species.url);
        urls.forEach((url: string) => {
          this.pokemonService.getPokemonInfo(url).subscribe(pokemonInfo => {
            this.pokemonInfoArray.push(pokemonInfo);
          });
        });
        console.log(this.pokemonInfoArray);
      }
    });
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
