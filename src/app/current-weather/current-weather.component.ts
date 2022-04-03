import { BringWeatherService } from './bring-weather.service';
import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  constructor(private BringWeatherService:BringWeatherService) { }
  ngOnInit(): void {

  }

  inputFromUser = new FormControl('');

  cityFromUser: string = '';

  handelClick() {
    this.BringWeatherService.getWeather(this.cityFromUser).subscribe(
      (data) => {
        console.log(data);
      }
    );
    console.log(this.cityFromUser);

  }

  handelInput(event: any) {
    this.cityFromUser = event.value;
  }

  forecast: any[] = [
    { day: 'Monday', temp: 22 },
    { day: 'Tuesday', temp: 23 },
    { day: 'Wednesday', temp: 24 },
    { day: 'Thursday', temp: 25 },
    { day: 'Friday', temp: 26 },
  ]

  searchSubject$ = new Subject<string>();
  subscription?: Subscription;


}
