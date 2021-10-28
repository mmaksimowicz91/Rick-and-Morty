import { Component, Input } from '@angular/core';

import { Character } from '../../interfaces/character'
@Component({
  selector: 'app-character-table',
  templateUrl: './character-table.component.html',
  styleUrls: ['./character-table.component.scss']
})
export class CharacterTableComponent {

  @Input() dataSource: Character[] = [];

  displayedColumns: string[] = ['id', 'name', 'image']

}
