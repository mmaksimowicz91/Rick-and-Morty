import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Character } from '../interfaces/character';
import { CharacterListResponse } from '../interfaces/character-list-response';
import { CharactersService } from './characters.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterDataService {

  list = new BehaviorSubject<Character[]>([]);
  pages = new BehaviorSubject<number>(0);
  currentPage = new BehaviorSubject<number>(0);

  constructor(private charactersService: CharactersService) { }

  load() {
    this.charactersService
      .getList()
      .subscribe(response => {
        this.currentPage.next(1);
        this.handleRes(response)
      })
  }

  getPage(page: number) {
    this.charactersService.getPage(page).subscribe(response => {
      this.handleRes(response)
    })
  }

  next() {
    const nextPageNumber = this.currentPage.value + 1;
    this.getPage(nextPageNumber)
  }

  previous() {
    const prevPageNumber = this.currentPage.value - 1;
    this.getPage(prevPageNumber)
  }

  private handleRes(response: CharacterListResponse) {
    this.list.next(response.results);
    this.pages.next(response.info.pages)
    console.log(response)
  }
}

