import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/character';

@Component({
  selector: 'app-character-img',
  templateUrl: './character-img.component.html',
  styleUrls: ['./character-img.component.scss']
})
export class CharacterImgComponent {
  @Input() character!: Character;
}
