import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Episode } from '../interfaces/episode';
import { EpisodeListResponse } from '../interfaces/episode-list-response';
import { EpisodesService } from './episodes.service';

@Injectable({
  providedIn: 'root'
})
export class EpisodeDataService {

  list = new BehaviorSubject<Episode[]>([]);
  pages = new BehaviorSubject<number>(0);
  currentPage = new BehaviorSubject<number>(0)

  constructor(private episodeService: EpisodesService) { }

  load() {
    this.episodeService
      .getList()
      .subscribe(response => {
        this.currentPage.next(1);
        this.handleRes(response)
      })
  }

  getPage(page: number) {
    this.episodeService.getPage(page).subscribe(response => {
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

  private handleRes(response: EpisodeListResponse) {
    this.list.next(response.results);
    this.pages.next(response.info.pages)
    console.log(response)
  }
}
