import { CurrentWeatherResponse } from './../shared/interfaces/current-weather-response.interface';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { BringWeatherService } from '../bring-weather.service';

@Component({
  selector: 'app-weather-box',
  templateUrl: './weather-box.component.html',
  styleUrls: ['./weather-box.component.scss']
})
export class WeatherBoxComponent implements OnInit{
  @Input() cityName: string | null = null;
  @Input() cityKey: string | undefined;

  currentLocationWeather$?: Observable<CurrentWeatherResponse[]>;

  constructor(private readonly weatherService: BringWeatherService) { }

  ngOnInit(): void {
    this.currentLocationWeather$ = this.weatherService.getCurrentWeather(this.cityKey);
  }

}
