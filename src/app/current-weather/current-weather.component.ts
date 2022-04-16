import { FiveDayForecastWeatherResponse, Headline } from './../service/5day-forecasts-response.interface';
import { citiesAndKeys } from './weather.interface';
import { BringWeatherService } from '../bring-weather.service';
import { Component, OnDestroy, OnInit, Pipe } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, Observable, startWith, Subject, switchMap, takeUntil } from 'rxjs';
import {FormControl} from "@angular/forms";
import { FavoritesCitiesQuery } from './state/current-weather.query';
import { FiveDayForecastWeatherresponseMock, weatherJson } from './fiveDayWeatherResponseMock'; // need to remove
import { currentWeatherResponse } from '../service/current-weather-response.interface';
import {DEFAULT_LAT , DEFAULT_LNG} from './../shared/consts';
import { AutoCompleteResponse } from '../shared/interfaces/auto-complete-response.interface';
import { GeoPositionResponse } from '../shared/interfaces/geo-position-response.interface';
@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})

export class CurrentWeatherComponent implements OnInit, OnDestroy {

  //--- this is temp code
  weatherJson: currentWeatherResponse = weatherJson;
  citiesAndKeys$: Observable<citiesAndKeys[]>;
  //--- this is temp code


  cityFromUser = new FormControl('');
  autoCompletedSuggestions$: Observable<AutoCompleteResponse[]>  | any;
  selectedKey: string | undefined;
  headline: string | undefined;
  forecastWeather: any;

  onDestroy$ = new Subject<void>();

  constructor(
    private readonly weatherService: BringWeatherService,
    private favoritesCitiesQuery: FavoritesCitiesQuery
    ) {
      this.citiesAndKeys$ = this.favoritesCitiesQuery.select('favoritesCities');
  }


  ngOnInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        this.weatherService.getWeatherByCoordinates(latitude, longitude).subscribe((data: GeoPositionResponse) => {
          this.handleInitPosition(data);
        });
      });
    } else {
      this.weatherService.getWeatherByCoordinates(DEFAULT_LAT, DEFAULT_LNG).subscribe((data: GeoPositionResponse) => {
        this.handleInitPosition(data);
      });
      console.log('Geolocation is not supported by this browser.');
    }
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


  selectSuggestCity(city: number): void {
    console.log(city);
  }

  private handleInitPosition(geoPositionRes: GeoPositionResponse) {
    this.addToFavorites(geoPositionRes.Key);
    //NEED TO CATCH THE NAMES
    this.getFiveDayForecast(geoPositionRes.Key);

  }


  private getFiveDayForecast(key: string) {
    this.selectedKey = key; // maybe i dont need this !
    this.weatherService.get5DayForecast(key).subscribe((fiveDaysForecastData: FiveDayForecastWeatherResponse) => {
    this.forecastWeather = fiveDaysForecastData.DailyForecasts;
    this.headline = fiveDaysForecastData.Headline.Text;
  });
  }


  private addToFavorites(key: string) {
    console.log(key);
  }

  handelSearch() {
    const tempCityCode: number = 210841;
    // this.weatherService.getCurrentConditionsByKey(tempCityCode).pipe()
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

}
