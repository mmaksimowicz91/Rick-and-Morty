import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { CharacterDataService } from 'src/app/services/character-data.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  constructor(private characters: CharacterDataService) { }
  character$ = this.characters.list;
  count = this.characters.itemCount;



  ngOnInit(): void {
    this.characters.load()
  }

  changePage(event: PageEvent) {
    console.log(event)
    this.characters.getPage(event.pageIndex + 1)
  }

}
