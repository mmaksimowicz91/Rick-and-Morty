import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { LocationDataService } from 'src/app/services/location-data.service';
import { Location } from 'src/app/interfaces/location';

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.scss']
})
export class EditLocationComponent implements OnInit {
  form: FormGroup;
  control: FormControl;
  isEditEnable = false;
  location: Location;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private editLocations: LocationDataService
  ) {
    this.form = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl(),
      type: new FormControl(),
      dimension: new FormControl(),
      residents: new FormControl(),
      url: new FormControl(),
      created: new FormControl()
    })
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      console.log(data);
      this.location = data.location;
      this.form.setValue(this.location);
    });
  }

  onSave() {
    if (this.form.valid) {
      this.editLocations.saveLocation(this.form.value);
      this.router.navigate(['location', this.location.id]);
    }
  }

}
