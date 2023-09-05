import { Subscription } from 'rxjs';
import { PokemonApiService } from './service/pokemon-api.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'team-planner';

  subscription: Subscription | undefined

  constructor(
    private pokemonService: PokemonApiService
  ){}

  ngOnInit(){
    this.getGenerations()
    this.getPkmnByGeneration(2)
  }

  getGenerations(): void{
    this.subscription = this.pokemonService.getGenerations().subscribe({
      next: generations => console.log(generations),
      error: er => console.error(er)
    })
  }


  getPkmnByGeneration(dexNum: number): void{
    this.pokemonService.getPkmnByGenerations(dexNum).subscribe({
      next: pkmns => console.log(pkmns),
      error: er => console.error(er)
    })
  }

  ngOnDestroy(){
    this.subscription?.unsubscribe();
  }

}
