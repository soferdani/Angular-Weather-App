import { FiveDayForecastWeatherResponse } from './../service/5day-forecasts-response.interface';
import { citiesAndKeys } from './weather.interface';
import { filter, switchMap, takeUntil, tap, map } from 'rxjs/operators';
import { BringWeatherService } from './bring-weather.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, startWith, Subject } from 'rxjs';
import {FormControl} from "@angular/forms";
import { FavoritesCitiesQuery } from './state/current-weather.query';
import { FiveDayForecastWeatherresponseMock, weatherJson } from './fiveDayWeatherResponseMock';
import { currentWeatherResponse } from '../service/current-weather-response.interface';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})

export class CurrentWeatherComponent implements OnInit, OnDestroy {
  forecast: any[] = [
    { day: 'Monday', temp: 22 },
    { day: 'Tuesday', temp: 23 },
    { day: 'Wednesday', temp: 24 },
    { day: 'Thursday', temp: 25 },
    { day: 'Friday', temp: 26 },
  ]

  FiveDayForecastWeatherresponseMock: FiveDayForecastWeatherResponse = FiveDayForecastWeatherresponseMock;
  weatherJson: currentWeatherResponse = weatherJson;

  citiesAndKeys$: Observable<citiesAndKeys[]>;

  constructor(
    private readonly weatherService: BringWeatherService,
    private favoritesCitiesQuery: FavoritesCitiesQuery
  ) {
    this.citiesAndKeys$ = this.favoritesCitiesQuery.select('favoritesCities');
  }

  onDestroy$ = new Subject<void>();

  currentConditionInCurrentCity$: Observable<any> | unknown = null;
  cityFromUser = new FormControl('');



  addToFavorites(key: number) {// need to add to favorites store
    console.log(key);


  }



  handelSearch() {
    const tempCityCode: number = 210841;
    // this.weatherService.getCurrentConditionsByKey(tempCityCode).pipe()
  }

  // citiesAndKeys$: Observable<any> = this.cityFromUser.valueChanges.pipe(
  //   takeUntil(this.onDestroy$),
  //   debounceTime(400),
  //   distinctUntilChanged(),
  //   filter((data) => data.length > 2),
  //   switchMap((search) => this.weatherService.getAutocomplete(search)),
  //   // tap((data) => console.log('data:', data)),
  //   map((data) => {
  //     console.log( data);
  //     // data.map(city => {

  //     // })
  //   })

  //     // return data.map((item: citiesAndKeys) => {
  //     //   return { city: item.LocalizedName, key: item.Key }})}),
  //         // tap((data) => console.log('data:', data)),
  // );



  ngOnInit(): void { };

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

}
