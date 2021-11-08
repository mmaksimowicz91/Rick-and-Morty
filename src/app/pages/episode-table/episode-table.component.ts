import { Component, Input } from '@angular/core';
import { Episode } from 'src/app/interfaces/episode';

@Component({
  selector: 'app-episode-table',
  templateUrl: './episode-table.component.html',
  styleUrls: ['./episode-table.component.scss']
})
export class EpisodeTableComponent {

  @Input() dataSource: Episode[] = [];

  displayedColumns: string[] = ['id', 'name', 'episode']

}
