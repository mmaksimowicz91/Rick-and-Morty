import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterListComponent } from './pages/character-list/character-list.component';
import { EpisodeListComponent } from './pages/episode-list/episode-list.component';
import { LocationListComponent } from './pages/location-list/location-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeaderComponent } from './shared/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './shared/footer/footer.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { LocationTableComponent } from './pages/location-table/location-table.component';
import { EpisodeTableComponent } from './pages/episode-table/episode-table.component';
import { CharacterTableComponent } from './pages/character-table/character-table.component';
import { HomeComponent } from './pages/home/home.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import { EpisodeDetailsComponent } from './pages/episode-details/episode-details.component';
import { LocationDetailsComponent } from './pages/location-details/location-details.component';
import { EditCharacterComponent } from './pages/edit-character/edit-character.component';
import { EditLocationComponent } from './pages/edit-location/edit-location.component';
import { EditEpisodeComponent } from './pages/edit-episode/edit-episode.component';


@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    EpisodeListComponent,
    LocationListComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    LocationTableComponent,
    EpisodeTableComponent,
    CharacterTableComponent,
    HomeComponent,
    CharacterDetailsComponent,
    EpisodeDetailsComponent,
    LocationDetailsComponent,
    EditCharacterComponent,
    EditLocationComponent,
    EditEpisodeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    MatPaginatorModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
