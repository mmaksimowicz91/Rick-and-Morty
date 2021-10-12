import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LocationDataService } from 'src/app/services/location-data.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss'],

})
export class LocationListComponent implements OnInit {
  location = this.locations.list;
  constructor(private locations: LocationDataService) { }


  ngOnInit(): void {
    this.locations.load();
  }

}
