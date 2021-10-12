import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Character } from '../interfaces/character';
import { CharactersService } from '../services/characters.service';

@Injectable({
  providedIn: 'root'
})
export class CharactersResolver implements Resolve<Character[]> {
  constructor(private charactersService: CharactersService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Character[]> {
    return this.charactersService.getList().pipe(map(response => response.results))
  }

}
