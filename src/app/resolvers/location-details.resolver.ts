import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { LocationsService } from '../services/locations.service';


@Injectable({
  providedIn: 'root'
})
export class LocationDetailsResolver implements Resolve<Location | false> {
  constructor(private locationsService: LocationsService) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Location | false> {
    const param = route.paramMap.get('id');

    if (param !== null) {
      const id = parseInt(param);
      return this.locationsService.getLocation(id);
    } else {
      return of(false);
    }
  }
}

