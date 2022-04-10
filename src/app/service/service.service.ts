import { Injectable } from '@angular/core';
import { citiesAndKeys } from '../current-weather/weather.interface';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';


export const FAVORITES: citiesAndKeys[] = [
  { city: 'London', Key: 210841 },
  { city: 'Paris', Key: 2988507 },
]


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }


  public getWeatherByKey(key: number) {
    const url = `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${environment.apiKey}`;
    return this.httpClient.get(url);
  }

}
