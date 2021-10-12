import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EpisodeDataService } from 'src/app/services/episode-data.service';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.scss']
})
export class EpisodeListComponent implements OnInit {

  episode = this.episodes.list;

  constructor(private episodes: EpisodeDataService) { }

  ngOnInit(): void {
    this.episodes.load()
  }

}
