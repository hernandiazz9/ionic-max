import { PlacesService } from './../places.service';
import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  loadedPlaces: Place[] = [];
  constructor(private placesS: PlacesService) {}

  ngOnInit() {
    this.loadedPlaces = this.placesS.places;
  }
}
