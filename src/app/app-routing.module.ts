import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './pages/character-list/character-list.component';
import { EpisodeListComponent } from './pages/episode-list/episode-list.component';
import { LocationListComponent } from './pages/location-list/location-list.component';


const routes: Routes = [
  {
    path: 'character',
    component: CharacterListComponent
  },
  {
    path: 'location',
    component: LocationListComponent
  },
  {
    path: 'episode',
    component: EpisodeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }