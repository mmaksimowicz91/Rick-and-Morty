import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { EpisodeDataService } from 'src/app/services/episode-data.service';
import { Episode } from 'src/app/interfaces/episode';

@Component({
  selector: 'app-edit-episode',
  templateUrl: './edit-episode.component.html',
  styleUrls: ['./edit-episode.component.scss']
})
export class EditEpisodeComponent implements OnInit {
  form: FormGroup;
  control: FormControl;
  isEditEnable = false;
  episode: Episode;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private editEpisodes: EpisodeDataService
  ) {
    this.form = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl(),
      air_date: new FormControl(),
      episode: new FormControl(),
      characters: new FormControl(),
      url: new FormControl(),
      created: new FormControl()

    });
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      console.log(data);
      this.episode = data.episode;
      this.form.setValue(this.episode);
    });
  }

  onSave() {
    if (this.form.valid) {
      this.editEpisodes.saveEpisode(this.form.value);
      this.router.navigate(['episode', this.episode.id]);
    }
  }

}
