import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  private apiUrl = "https://pokeapi.co/api/v2/"

  constructor( private http: HttpClient ) { }


  private getHeaders(): HttpHeaders{
    return new HttpHeaders({
      'Content-type':'application/json'
    })
  }

  getGenerations(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}generation`)
  }

  getNationalDex(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}pokedex/1`)
  }

  getPkmnByGenerations(num: number): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}pokedex/${num}`)
  }


}
