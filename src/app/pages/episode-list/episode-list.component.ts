import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { EpisodeDataService } from 'src/app/services/episode-data.service';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.scss']
})
export class EpisodeListComponent implements OnInit {

  constructor(private episodes: EpisodeDataService) { }
  episode$ = this.episodes.list;
  count = this.episodes.itemCount;

  ngOnInit(): void {
    this.episodes.load()
  }

  changePage(event: PageEvent) {
    this.episodes.getPage(event.pageIndex + 1)
  }

}
