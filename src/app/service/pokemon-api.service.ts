import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { Pokemon } from '../models/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {


  private newApi = "http://localhost:3000"

  constructor( private http: HttpClient ) { }

  getDex(num: number): Observable<any>{
    return this.http.get<any>(`${this.newApi}/jogo/${num}`)
  }

  getGames(): Observable<any>{
    return this.http.get<any>(`${this.newApi}/games`)
  }

  getGame(id: number):Observable<any>{
    return this.http.get<any>(`${this.newApi}/games/${id}`)
  }

  getType(id: number):Observable<any>{
    return this.http.get<any>(`${this.newApi}/types/${id}`)
  }
  getTypes():Observable<any>{
    return this.http.get<any>(`${this.newApi}/types`)
  }

}
