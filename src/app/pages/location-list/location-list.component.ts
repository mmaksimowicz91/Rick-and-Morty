import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { LocationDataService } from 'src/app/services/location-data.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss'],

})


export class LocationListComponent implements OnInit {
  constructor(private locations: LocationDataService) { }
  location$ = this.locations.list;
  count = this.locations.itemCount;




  ngOnInit(): void {
    this.locations.load();
  }

  changePage(event: PageEvent) {
    this.locations.getPage(event.pageIndex + 1)
  }

}
