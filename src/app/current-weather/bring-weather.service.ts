import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Subscription, debounceTime, distinctUntilChanged, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BringWeatherService { // change to weather service

  constructor(private httpClient: HttpClient) { }

  private actionSubject = new BehaviorSubject<string>('');
  readonly action$ = this.actionSubject.asObservable();

  public setAction(input: string): void {
    this.actionSubject.next(input);
  }



  readonly autocompleteSearch$ = this.action$.pipe(
    tap((data: string) => console.log('input:', data)),
    debounceTime(400),
    distinctUntilChanged(),
  );




    public getWeatherByCoordinates(lat: number, lon: number) {
      const url = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${environment.apiKey}&q=${lat},${lon}`;
      return this.httpClient.get(url);
    }

    public getWeatherByKey(key: string) {
      const url = `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${environment.apiKey}`;
      return this.httpClient.get(url);
    }


  public getAutocomplete(input: string) {
    const url = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${environment.apiKey}&q=${input}`;
    return this.httpClient.get(url);
  }
    // const url = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${environment.apiKey}&q=${search}`;
    // return this.httpClient.get(url);


}
