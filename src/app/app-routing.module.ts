import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './pages/character-list/character-list.component';
import { EpisodeListComponent } from './pages/episode-list/episode-list.component';
import { LocationListComponent } from './pages/location-list/location-list.component';
import { HomeComponent } from './pages/home/home.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import { EditCharacterComponent } from './pages/edit-character/edit-character.component';
import { EditEpisodeComponent } from './pages/edit-episode/edit-episode.component';

import { CharacterDetailsResolver } from './resolvers/character-details.resolver';
import { EpisodeDetailsComponent } from './pages/episode-details/episode-details.component';
import { LocationDetailsComponent } from './pages/location-details/location-details.component';
import { EpisodeDetailsResolver } from './resolvers/episode-details.resolver';
import { LocationsResolver } from './resolvers/locations.resolver';
import { LocationDetailsResolver } from './resolvers/location-details.resolver';
import { EditLocationComponent } from './pages/edit-location/edit-location.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
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
  },
  {
    path: 'character/:id',
    component: CharacterDetailsComponent,
    resolve: {
      character: CharacterDetailsResolver
    },
  },
  {
    path: 'episode/:id',
    component: EpisodeDetailsComponent,
    resolve: {
      episode: EpisodeDetailsResolver
    }
  },
  {
    path: 'character/:id/edit',
    component: EditCharacterComponent,
    resolve: {
      character: CharacterDetailsResolver,
      locations: LocationsResolver
    }
  },
  {
    path: 'episode/:id/edit',
    component: EditEpisodeComponent,
    resolve: {
      episode: EpisodeDetailsResolver
    }
  },
  {
    path: 'location/:id/edit',
    component: EditLocationComponent,
    resolve: {
      location: LocationDetailsResolver
    }
  },
  {
    path: 'location/:id',
    component: LocationDetailsComponent,
    resolve: {
      location: LocationDetailsResolver
    }

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }