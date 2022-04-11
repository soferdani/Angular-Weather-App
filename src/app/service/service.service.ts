import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { citiesAndKeys } from '../current-weather/weather.interface';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { currentWeatherResponse } from './current-weather-response.interface';
import { map } from 'rxjs';


export const FAVORITES: citiesAndKeys[] = [
  { city: 'London', Key: 210841 },
  { city: 'Paris', Key: 2988507 },
]


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }


  public getWeatherByKey(key: number | string ): Observable<currentWeatherResponse > {
      const url = `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${environment.apiKey}`;
      return this.httpClient.get<currentWeatherResponse[]>(url).pipe(
        map(response => response[0]),
        tap(response => console.log(response))
      );
  }
}
