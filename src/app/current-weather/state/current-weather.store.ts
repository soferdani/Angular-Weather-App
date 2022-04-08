import { citiesAndKeys } from './../weather.interface';
import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { FAVORITES } from 'src/app/service/service.service';

export interface FavoritesCities {
  favoritesCities: citiesAndKeys[];
}

export function createInitialState(): FavoritesCities {
  return {
    favoritesCities: FAVORITES
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'current-weather' })
export class CurrentWeatherStore extends Store<FavoritesCities> {

  constructor() {
    super(createInitialState());
  }
}
