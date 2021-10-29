import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Episode } from '../interfaces/episode';
import { EpisodesService } from '../services/episodes.service';


@Injectable({
  providedIn: 'root'
})
export class EpisodeDetailsResolver implements Resolve<Episode | false> {
  constructor(private episodesService: EpisodesService) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Episode | false> {
    const param = route.paramMap.get('id');

    if (param !== null) {
      const id = parseInt(param);
      return this.episodesService.getEpisode(id);
    } else {
      return of(false);
    }
  }
}
