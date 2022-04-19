import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { CitiesAndKeys } from 'src/app/shared/interfaces/cities-and-keys.interface';

export interface FavoritesState {
  favorites: CitiesAndKeys[]
}

export function createInitialState(): FavoritesState {
  return {
    favorites: [
      { city: 'London', key: "328328" },
      { city: 'Paris', key: "623" },
    ]
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'favorites' })
export class FavoritesStore extends Store<FavoritesState> {

  constructor() {
    super(createInitialState());
  }
}
