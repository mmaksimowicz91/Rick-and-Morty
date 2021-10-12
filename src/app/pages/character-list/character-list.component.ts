import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CharacterDataService } from 'src/app/services/character-data.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  character = this.characters.list;

  constructor(private characters: CharacterDataService) { }

  ngOnInit(): void {
    this.characters.load()
  }

}
