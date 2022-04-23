import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, Observable, Subject, switchMap, takeUntil } from 'rxjs';
import {FormControl} from "@angular/forms";
import {DEFAULT_LAT , DEFAULT_LNG} from './../shared/consts';
import { AutoCompleteResponse } from '../shared/interfaces/auto-complete-response.interface';
import { GeoPositionResponse } from '../shared/interfaces/geo-position-response.interface';
import { FiveDayForecastWeatherResponse } from '../shared/interfaces/5day-forecasts-response.interface';
import { StateAppService } from '../state-app.service';
import { FavoritesQuery } from '../favorites/state/favorites.query';
import { CitiesAndKeys } from '../shared/interfaces/cities-and-keys.interface';
import { BringWeatherService } from '../bring-weather.service';
@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})

export class CurrentWeatherComponent implements OnInit, OnDestroy {

  favoritesCities$: Observable<CitiesAndKeys[]>
  cityFromUser = new FormControl('');
  autoCompletedSuggestions$: Observable<AutoCompleteResponse[]>  | any;
  selectedKey: string|any;
  cityName: any;
  headline: string | undefined;
  forecastWeather: any;

  onDestroy$ = new Subject<void>();

  constructor(
    private readonly weatherService: BringWeatherService,
    private favoritesQuery:FavoritesQuery,
    private state: StateAppService,
    private activeRout: ActivatedRoute
    ) {
      this.favoritesCities$ = this.favoritesQuery.favoritesCities$;
    }


  ngOnInit(): void {
    this.activeRout.params.subscribe(params => { // chack if need to unsebscrive
      console.log(params);
    })
    navigator.geolocation.getCurrentPosition((position) => {
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
    distinctUntilChanged(),
    switchMap((data: string) => {
      return this.weatherService.getAutocomplete(data);
    })
  ).subscribe((suggestions: any) => {
    this.autoCompletedSuggestions$ = suggestions;
  });


  selectSuggestCity(city: AutoCompleteResponse): void {
    this.cityFromUser.patchValue(city.LocalizedName);
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
    const currentFavorites = this.favoritesQuery.getValue().favorites;
    if (currentFavorites.find(city => city.key === this.selectedKey)) {
      this.state.removeFavorite(this.selectedKey);
    } else {
      this.state.addFavorite(this.cityName, this.selectedKey);
    }
  }


  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

}
