import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Location } from '../interfaces/location';
import { LocationListResponse } from '../interfaces/location-list-response';
import { LocationsService } from './locations.service';


@Injectable({
  providedIn: 'root'
})
export class LocationDataService {

  list = new BehaviorSubject<Location[]>([]);
  pages = new BehaviorSubject<number>(0);
  currentPage = new BehaviorSubject<number>(0);

  constructor(private locationService: LocationsService) { }

  load() {
    this.locationService
      .getList()
      .subscribe(response => {
        this.currentPage.next(1);
        this.handleRes(response)
      })
  }

  getPage(page: number) {
    this.locationService.getPage(page).subscribe(response => {
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

  private handleRes(response: LocationListResponse) {

    this.list.next(response.results);
    this.pages.next(response.info.pages)
    console.log(response)
  }
}
