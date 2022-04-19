import { CitiesAndKeys } from './../../shared/interfaces/cities-and-keys.interface';
import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { FavoritesState,FavoritesStore } from './favorites.store';
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class FavoritesQuery extends Query<FavoritesState> {
  update(arg0: { favorites: CitiesAndKeys[]; }) {
    throw new Error('Method not implemented.');
  }
  favoritesCities$: Observable<CitiesAndKeys[]> = this.select("favorites")

  constructor(protected override store: FavoritesStore) {
    super(store);
  }

}
