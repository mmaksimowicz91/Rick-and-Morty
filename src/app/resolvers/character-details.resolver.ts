import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Character } from '../interfaces/character';
import { CharactersService } from '../services/characters.service';


@Injectable({
  providedIn: 'root'
})
export class CharacterDetailsResolver implements Resolve<Character | false> {
  constructor(private charactersService: CharactersService) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Character | false> {
    const param = route.paramMap.get('id');

    if (param !== null) {
      const id = parseInt(param);
      return this.charactersService.getCharacter(id);
    } else {
      return of(false);
    }
  }
}
