import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CitiesAndKeys } from './shared/interfaces/cities-and-keys.interface';

@Injectable({
  providedIn: 'root'
})
export class StateAppService {
  private favoritesState$: BehaviorSubject<CitiesAndKeys[]> = new BehaviorSubject<CitiesAndKeys[]>([]);

  getFavoritesState(): Observable<CitiesAndKeys[]> {
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
