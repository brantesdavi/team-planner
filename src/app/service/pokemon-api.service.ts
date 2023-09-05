import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { Pokemon } from '../models/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  private apiUrl = "https://pokeapi.co/api/v2/"

  constructor( private http: HttpClient ) { }
  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-type': 'application/json'
    });
  }

  getPokemonInfo(url: string): Observable<Pokemon> {
    // Extrai o ID do URL
    const id = this.extractIdFromUrl(url);

    // Faz a primeira solicitação para obter informações básicas do Pokémon
    return this.http.get<any>(url, { headers: this.getHeaders() }).pipe(
      switchMap((basicInfo) => {
        // Faz a segunda solicitação para obter informações adicionais do Pokémon
        return this.http.get<any>(`${this.apiUrl}pokemon/${id}/`, { headers: this.getHeaders() }).pipe(
          map((details) => {
            // Extrai as informações necessárias dos detalhes do Pokémon
            return {
              name: basicInfo.name,
              id: details.id,
              imageDefault: details.sprites.front_default,
              types: details.types.map((typeInfo: any) => ({
                slot: typeInfo.slot,
                name: typeInfo.type.name
              }))
            };
          })
        );
      })
    );
  }

  private extractIdFromUrl(url: string): number {
    // Extrai o ID do URL usando uma expressão regular
    const match = url.match(/\/(\d+)\/$/);
    if (match) {
      return parseInt(match[1], 10);
    }
    return 0;
  }


  getGenerations(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}generation`)
  }

  getDexLink(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}pokedex/2`)
  }

  getDexByGenerations(num: number): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}pokedex/${num}`)
  }

  getPokemonByNumber(num: number): Observable<Pokemon>{
    return this.http.get<any>(`${this.apiUrl}pokemon/${num}`)
  }

  getPokemonImage(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}pokemon-form/1`)
  }

  getPokemonType(num: number): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}pokemon-form/${num}`)
  }

}
