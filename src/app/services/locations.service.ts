import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocationListResponse } from '../interfaces/location-list-response';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get<LocationListResponse>('https://rickandmortyapi.com/api/location')
  }

  getLocation(id: number) {
    return this.http.get(`https://rickandmortyapi.com/api/location/${id}`)
  }
}
