import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface citiesAndKeys {
  city: string;
  key: string;
}

@Injectable({
  providedIn: 'root'
})
export class StateAppService {
  private favoritesState$: BehaviorSubject<citiesAndKeys[]> = new BehaviorSubject<citiesAndKeys[]>([]);

  getFavoritesState(): Observable<citiesAndKeys[]> {
    return this.favoritesState$.asObservable();
  }

  addFavorite(city: string, key: string) {
    const favorites = this.favoritesState$.getValue();
    const newFavorites = [...favorites, { city, key }];
    this.favoritesState$.next(newFavorites);
  }

  removeFavorite(key: string) {
    const favorites = this.favoritesState$.getValue();
    const newFavorites = favorites.filter(favorite => favorite.key !== key);
    this.favoritesState$.next(newFavorites);
  }

  constructor() { }
}
