import { citiesAndKeys } from './../weather.interface';
import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface FavoritesCities {
  favoritesCities: citiesAndKeys[];
}

export function createInitialState(): FavoritesCities {
  return {
    favoritesCities: [
      { city: 'London', key: 210841 },
      { city: 'Paris', key: 2988507 },
    ]
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'current-weather' })
export class CurrentWeatherStore extends Store<FavoritesCities> {

  constructor() {
    super(createInitialState());
  }
}
