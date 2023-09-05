import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PokemonApiService } from 'src/app/service/pokemon-api.service';

@Component({
  selector: 'app-my-team-view',
  templateUrl: './my-team-view.component.html',
  styleUrls: ['./my-team-view.component.scss']
})
export class MyTeamViewComponent implements OnInit {

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
