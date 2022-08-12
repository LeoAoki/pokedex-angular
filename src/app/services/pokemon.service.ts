import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseURL = 'https://pokeapi.co/api/v2/pokemon'
  pokemons: any = []

  constructor(private http: HttpClient) {
    this.getPokemons()
  }

  async getPokemons() {
    for (let i = 1; i < 152; i++) {
      const request = await this.http
        .get<any>(`${this.baseURL}/${i}`)
        .toPromise()
      this.pokemons.push(request)
   }
  }
}
