import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Location } from '../interfaces/location';
import { LocationsService } from '../services/locations.service';

@Injectable({
  providedIn: 'root'
})
export class LocationsResolver implements Resolve<Location[]> {
  constructor(private locationsService: LocationsService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Location[]> {
    return this.locationsService.getList().pipe(map(response => response.results))
  }
  
}
