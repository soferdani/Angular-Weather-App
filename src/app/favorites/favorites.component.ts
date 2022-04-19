import { CitiesAndKeys } from './../shared/interfaces/cities-and-keys.interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FavoritesQuery } from './state/favorites.query';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  favoritesCities$: Observable<CitiesAndKeys[]>

  constructor(private favoritesQuery:FavoritesQuery) {
    this.favoritesCities$ = this.favoritesQuery.favoritesCities$;
  }
  ngOnInit(): void { }
}
