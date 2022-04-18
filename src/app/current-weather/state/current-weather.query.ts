// import { citiesAndKeys } from 'src/app/current-weather/weather.interface';
import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import {Observable} from "rxjs";
import { FavoritesCities, CurrentWeatherStore } from './current-weather.store';


@Injectable({ providedIn: 'root' })
export class FavoritesCitiesQuery extends Query<FavoritesCities> {

  favoritesCities$: Observable<any[]> = this.select('favoritesCities');


  constructor(protected override store: CurrentWeatherStore) {
    super(store);
  }
}
