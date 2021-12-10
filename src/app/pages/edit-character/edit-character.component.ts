import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { CharacterDataService } from '../../services/character-data.service';
import { LocationDataService } from '../../services/location-data.service';
import { Character } from '../../interfaces/character';
import { Location } from '../../interfaces/location';
import { GENDER } from '../../interfaces/gender.enum';

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.scss']
})
export class EditCharacterComponent implements OnInit {
  form: FormGroup;
  control: FormControl;
  isEditEnable = false;
  character: Character;
  locations: Location[];
  GENDER = GENDER;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private editCharacters: CharacterDataService,
    private locationDataService: LocationDataService
  ) {
    this.form = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl(),
      status: new FormControl(),
      species: new FormControl(),
      type: new FormControl(),
      gender: new FormControl(),
      origin: new FormControl(),
      image: new FormControl(),
      location: new FormControl(),
      episode: new FormControl(),
      url: new FormControl(),
      created: new FormControl(),
    });
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      console.log(data);
      this.character = data.character;
      this.locations = data.locations;

      this.form.setValue(this.character);
    });
  }

  onSave() {
    if (this.form.valid) {
      this.editCharacters.saveCharacter(this.form.value);
      this.router.navigate(['character', this.character.id]);
    }
  }

}
