import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BringWeatherService {



  constructor(private httpClient: HttpClient) { }

  public getWeather(city: string) {
    const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${environment.apiKey}&q=${city}`;
    return this.httpClient.get(url);
  }

}
