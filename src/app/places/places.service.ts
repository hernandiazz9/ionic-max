import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Paris',
      'Para comer y beber',
      // eslint-disable-next-line max-len
      'https://www.freepik.com/free-photo/cherry-blossoms-spring-chureito-pagoda-fuji-mountain-japan_10824438.htm#query=tokyo&position=0&from_view=search',
      10
    ),
    new Place(
      'p2',
      'Tokyo',
      'Para comer y beber',
      // eslint-disable-next-line max-len
      'https://www.finnair.com/es-en/destinations/asia-pacific/japan/tokyo',
      10
    ),
  ];
  constructor() {}

  get places() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._places];
  }
}
