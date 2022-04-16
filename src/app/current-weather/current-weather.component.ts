import { FiveDayForecastWeatherResponse, Headline } from './../service/5day-forecasts-response.interface';
import { citiesAndKeys } from './weather.interface';
import { BringWeatherService } from '../bring-weather.service';
import { Component, OnDestroy, OnInit, Pipe } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, Observable, startWith, Subject, switchMap, takeUntil } from 'rxjs';
import {FormControl} from "@angular/forms";
import { FavoritesCitiesQuery } from './state/current-weather.query';
import { FiveDayForecastWeatherresponseMock, weatherJson } from './fiveDayWeatherResponseMock';
import { currentWeatherResponse } from '../service/current-weather-response.interface';
import {DEFAULT_LAT , DEFAULT_LNG} from './../shared/consts';
import { AutoCompleteResponse } from '../shared/interfaces/auto-complete-response.interface';
@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})

export class CurrentWeatherComponent implements OnInit, OnDestroy {

  //--- this is temp code
  FiveDayForecastWeatherresponseMock: FiveDayForecastWeatherResponse = FiveDayForecastWeatherresponseMock;
  weatherJson: currentWeatherResponse = weatherJson;
  citiesAndKeys$: Observable<citiesAndKeys[]>;
  //--- this is temp code

  cityFromUser = new FormControl('');
  autoCompletedSuggestions$: Observable<AutoCompleteResponse[]>  | any;
  selectedKey: number | undefined;
  headline: string | undefined;

  onDestroy$ = new Subject<void>();

  constructor(
    private readonly weatherService: BringWeatherService,
    private favoritesCitiesQuery: FavoritesCitiesQuery
    ) {
      this.citiesAndKeys$ = this.favoritesCitiesQuery.select('favoritesCities');
    }

    autoCompletedInput$ = this.cityFromUser.valueChanges.pipe(
      filter((data : string ) => data.length > 0),
      takeUntil(this.onDestroy$),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((data: string) => {
        return this.weatherService.getAutocomplete(data);
      })
    ).subscribe((suggestions: any) => {
      this.autoCompletedSuggestions$ = suggestions;
    });


    selectSuggestCity(city: number): void {
      console.log(city);

    }

  getFiveDayForecast(key: number) {
    this.selectedKey = key; // maybe i dont need this !
    
  }


  addToFavorites(key: number) {// need to add to favorites store
    console.log(key);
  }

  handelSearch() {
    const tempCityCode: number = 210841;
    // this.weatherService.getCurrentConditionsByKey(tempCityCode).pipe()
  }


  ngOnInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => { });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  };

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

}
