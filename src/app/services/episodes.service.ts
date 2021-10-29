import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EpisodeListResponse } from '../interfaces/episode-list-response';
import { Episode } from '../interfaces/episode';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get<EpisodeListResponse>('https://rickandmortyapi.com/api/episode')
  }

  getEpisode(id: number) {
    return this.http.get<Episode>(`https://rickandmortyapi.com/api/episode/${id}`)
  }

  getPage(page: number) {
    return this.http.get<EpisodeListResponse>(`https://rickandmortyapi.com/api/episode/`, {
      params: {
        page
      }
    })
  }
}
