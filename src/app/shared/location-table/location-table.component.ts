import { Input, Component } from '@angular/core';

import { Location } from '../../interfaces/location';

@Component({
  selector: 'app-location-table',
  templateUrl: './location-table.component.html',
  styleUrls: ['./location-table.component.scss']
})
export class LocationTableComponent {
  @Input() dataSource: Location[] = [];

  displayedColumns: string[] = ['name', 'type', 'dimension'];
}
