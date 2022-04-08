import { citiesAndKeys } from './../../current-weather/weather.interface';
import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface favoritesState {
  favorites: citiesAndKeys[]
}

export function createInitialState(): favoritesState {
  return {
    favorites: []
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'favorites' })
export class CartStore extends Store<favoritesState> {

  constructor() {
    super(createInitialState());
  }
}
