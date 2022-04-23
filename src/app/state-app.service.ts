import { Injectable } from '@angular/core';
import { FavoritesStore } from './favorites/state/favorites.store';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class StateAppService {

  
  addFavorite(city: any, key: any) {
    this.favoritesStore.update(
      (currentState: any) =>
        ({ ...currentState, favorites: [...currentState.favorites, { city, key }] }));
    this.openSnackBar( `${city} added to favorites`);
  }

  removeFavorite(key: string) {
    this.favoritesStore.update(
      (currentState: any) =>
        ({ ...currentState, favorites: currentState.favorites.filter((item: any) => item.key !== key) }));
    this.openSnackBar("City removed from favorites");
  }


  
  public openSnackBar(message: string) {
    this._snackBar.open(message, "Done",{
      duration: 2500
    });
  }

  constructor(private favoritesStore:FavoritesStore , private _snackBar:MatSnackBar) { }
}
