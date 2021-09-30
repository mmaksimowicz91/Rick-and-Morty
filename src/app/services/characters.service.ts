import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterListResponse } from '../interfaces/character-list-response';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get<CharacterListResponse>('https://rickandmortyapi.com/api/character')
  }

  getCharacter(id: number) {
    return this.http.get(`https://rickandmortyapi.com/api/character/${id}`)
  }
}


