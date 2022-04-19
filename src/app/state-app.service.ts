import { Injectable } from '@angular/core';
import { FavoritesStore } from './favorites/state/favorites.store';
import { CitiesAndKeys } from './shared/interfaces/cities-and-keys.interface';

@Injectable({
  providedIn: 'root'
})
export class StateAppService {

  addFavorite(city: any, key: any) {
    this.favoritesStore.update(
      (currentState: any) =>
        ({ ...currentState, favorites: [...currentState.favorites, { city, key }] }));
  }

  removeFavorite(key: string) {
    this.favoritesStore.update(
      (currentState: any) =>
        ({ ...currentState, favorites: currentState.favorites.filter((item: any) => item.key !== key) }));
  }

  constructor(private favoritesStore:FavoritesStore ) { }
}
