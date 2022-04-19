import { BringWeatherService } from '../bring-weather.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, Observable, Subject, switchMap, takeUntil } from 'rxjs';
import {FormControl} from "@angular/forms";
import { FavoritesCitiesQuery } from './state/current-weather.query';
import {DEFAULT_LAT , DEFAULT_LNG} from './../shared/consts';
import { AutoCompleteResponse } from '../shared/interfaces/auto-complete-response.interface';
import { GeoPositionResponse } from '../shared/interfaces/geo-position-response.interface';
import { FiveDayForecastWeatherResponse } from '../shared/interfaces/5day-forecasts-response.interface';
import { StateAppService } from '../state-app.service';
@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})

export class CurrentWeatherComponent implements OnInit, OnDestroy {

  citiesAndKeys$: Observable<any[]>; // not sure this is the way

  cityFromUser = new FormControl('');
  autoCompletedSuggestions$: Observable<AutoCompleteResponse[]>  | any;
  selectedKey: string | undefined;
  cityName: any;
  headline: string | undefined;
  forecastWeather: any;

  onDestroy$ = new Subject<void>();

  constructor(
    private readonly weatherService: BringWeatherService,
    private favoritesCitiesQuery: FavoritesCitiesQuery,
    private state : StateAppService
    ) {
      this.citiesAndKeys$ = this.favoritesCitiesQuery.select('favoritesCities');
  }


  ngOnInit(): void { // done
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(navigator.geolocation);
      const { latitude, longitude } = position.coords;
      this.weatherService.getWeatherByCoordinates(latitude, longitude).subscribe((data: GeoPositionResponse) => {
        this.handleInitPosition(data);
      });
    }, () => {
      this.weatherService.getWeatherByCoordinates(DEFAULT_LAT, DEFAULT_LNG).subscribe((data: GeoPositionResponse) => {
        this.handleInitPosition(data);
      });
    });
  };

  autoCompletedInput$ = this.cityFromUser.valueChanges.pipe(
    filter((data : string ) => data.length > 0),
    takeUntil(this.onDestroy$),
    debounceTime(400),
    distinctUntilChanged(),      switchMap((data: string) => {
      return this.weatherService.getAutocomplete(data);
    })
  ).subscribe((suggestions: any) => {
    this.autoCompletedSuggestions$ = suggestions;
  });


  selectSuggestCity(city: AutoCompleteResponse): void {
    this.cityName = city.LocalizedName;
    this.getFiveDayForecast(city.Key);
  }

  private handleInitPosition(geoPositionRes: GeoPositionResponse) {
    this.cityName = `${geoPositionRes.EnglishName}`;
    this.selectedKey = geoPositionRes.Key;
    this.getFiveDayForecast(geoPositionRes.Key);
  }



  private getFiveDayForecast(key: string) {
    this.selectedKey = key;
    this.weatherService.get5DayForecast(key).subscribe((fiveDaysForecastData: FiveDayForecastWeatherResponse) => {
      this.forecastWeather = fiveDaysForecastData.DailyForecasts;
      this.headline = fiveDaysForecastData.Headline.Text;
    });
  }


  toggleFavorites() {
    const selectedCity = {
      key: this.selectedKey,
      name: this.cityName
    }

    console.log('toggleFavorites');
  }


  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

}
