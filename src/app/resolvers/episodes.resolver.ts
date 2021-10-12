import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Episode } from '../interfaces/episode';
import { EpisodesService } from '../services/episodes.service';

@Injectable({
  providedIn: 'root'
})
export class EpisodesResolver implements Resolve<Episode[]> {
  constructor(private episodesService: EpisodesService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Episode[]> {
    return this.episodesService.getList().pipe(map(response => response.results))
  }
}
