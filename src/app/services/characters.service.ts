import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterListResponse } from '../interfaces/character-list-response';
import { Character } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get<CharacterListResponse>('https://rickandmortyapi.com/api/character')
  }

  getCharacter(id: number) {
    return this.http.get<Character>(`https://rickandmortyapi.com/api/character/${id}`)
  }

  getPage(page: number) {
    return this.http.get<CharacterListResponse>(`https://rickandmortyapi.com/api/character/`, {
      params: {
        page
      }
    })
  }

}


