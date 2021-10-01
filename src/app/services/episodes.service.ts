import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EpisodeListResponse } from '../interfaces/episode-list-response';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get<EpisodeListResponse>('https://rickandmortyapi.com/api/episode')
  }

  getEpisode(id: number) {
    return this.http.get(`https://rickandmortyapi.com/api/episode/${id}`)
  }
}
