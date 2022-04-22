import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class BringWeatherService {

  constructor(private httpClient: HttpClient) { }

  public getWeatherByCoordinates(lat: number, lon: number): Observable<any> {
    const url = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${environment.apiKey}&q=${lat},${lon}`;
    return this.httpClient.get(url);
  }


  public getAutocomplete(input: string): Observable<any> {
    const url = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${environment.apiKey}&q=${input}`;
    return this.httpClient.get(url);
  }

  public get5DayForecast(key: any) : Observable<any> {
    const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${environment.apiKey}`
    return this.httpClient.get(url);
  }

  public getCurrentWeather(key: any): Observable<any> {
    const url = `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${environment.apiKey}`;
    const response = this.httpClient.get(url);
    return response;
  }

}
