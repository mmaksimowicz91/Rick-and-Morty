import { Component, Input } from '@angular/core';
import { Location } from '../interfaces/location';


@Component({
  selector: 'app-location-img',
  templateUrl: './location-img.component.html',
  styleUrls: ['./location-img.component.scss']
})
export class LocationImgComponent {
  @Input() location!: Location;
}
