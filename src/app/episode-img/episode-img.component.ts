import { Component, Input } from '@angular/core';
import { Episode } from '../interfaces/episode';

@Component({
  selector: 'app-episode-img',
  templateUrl: './episode-img.component.html',
  styleUrls: ['./episode-img.component.scss']
})
export class EpisodeImgComponent {

  @Input() episode!: Episode;
}
