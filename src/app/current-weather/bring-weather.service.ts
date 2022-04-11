import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

// export const forecasts5day

export class BringWeatherService {

  constructor(private httpClient: HttpClient) { }


    public getWeatherByCoordinates(lat: number, lon: number) { // not in use at the moment
      const url = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${environment.apiKey}&q=${lat},${lon}`;
      return this.httpClient.get(url);
    }

    public getCurrentConditionsByKey(name: number) {
      const url = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${environment.apiKey}&q=${name}`;
      return this.httpClient.get(url);
    }


  public getAutocomplete(input: string) {
    const url = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${environment.apiKey}&q=${input}`;
    return this.httpClient.get(url);
  }

}
