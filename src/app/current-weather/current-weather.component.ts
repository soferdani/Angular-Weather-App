import { switchMap, tap } from 'rxjs/operators';
import { BringWeatherService } from './bring-weather.service';
import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, Observable, startWith } from 'rxjs';
import {FormControl} from "@angular/forms";
import { AutocompleteService } from './autocomplete.service';


@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})

export class CurrentWeatherComponent implements OnInit {
  forecast: any[] = [
    { day: 'Monday', temp: 22 },
    { day: 'Tuesday', temp: 23 },
    { day: 'Wednesday', temp: 24 },
    { day: 'Thursday', temp: 25 },
    { day: 'Friday', temp: 26 },
  ]

  cityFromForm = new FormControl('');
  cityReadyToSearch$ = this.cityFromForm.valueChanges.pipe(
    debounceTime(400),
    distinctUntilChanged(),
    startWith(''),
  );

  results$: Observable<any> = this.cityReadyToSearch$.pipe(
    switchMap((search) => this.weatherService.getAutocomplete(search))
    ,tap((data) => console.log('data:', data))
  )

  constructor(private readonly weatherService: BringWeatherService) { }

  readonly autoCompleteCities$: Observable<string[]> | void | any = this.weatherService.autocompleteSearch$



  ngOnInit(): void {
    // this.autocompleteForm = new FormGroup({
    //   autocomplete: new FormControl('')
    // });
  }



  onInput(event: Event) {


    // this.weatherService.setAction((event?.target as HTMLInputElement)?.value)
    // console.log(this.autoCompleteCities$);

  }



}
