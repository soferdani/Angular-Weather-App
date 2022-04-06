import { citiesAndKeys } from './weather.interface';
import { filter, switchMap, takeUntil, tap } from 'rxjs/operators';
import { BringWeatherService } from './bring-weather.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, Observable, startWith, Subject } from 'rxjs';
import {FormControl} from "@angular/forms";


@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})

export class CurrentWeatherComponent implements OnInit, OnDestroy {
  forecast: any[] = [
    { day: 'Monday', temp: 22 },
    { day: 'Tuesday', temp: 23 },
    { day: 'Wednesday', temp: 24 },
    { day: 'Thursday', temp: 25 },
    { day: 'Friday', temp: 26 },
  ]
  constructor(private readonly weatherService: BringWeatherService) { }

  onDestroy$ = new Subject<void>();

  cityFromUser = new FormControl('');

  cityReadyToSearch$: Observable<any> = this.cityFromUser.valueChanges.pipe(
    debounceTime(400),
    distinctUntilChanged(),
    filter((data) => data.length > 2),
    switchMap((search) => this.weatherService.getAutocomplete(search)),
  )


      ngOnInit(): void {
        this.cityReadyToSearch$.pipe(
          takeUntil(this.onDestroy$),
          map((data) => {
            return data.map((item: citiesAndKeys) => {
              return { city: item.LocalizedName, key: item.Key }})}),
          tap((data) => console.log('data:', data)),
        ).subscribe()
      }

      ngOnDestroy(): void {
        this.onDestroy$.next();
      }

}
