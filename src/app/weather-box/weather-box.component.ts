import { CurrentWeatherResponse } from './../shared/interfaces/current-weather-response.interface';
import { Observable } from 'rxjs';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { BringWeatherService } from '../bring-weather.service';

@Component({
  selector: 'app-weather-box',
  templateUrl: './weather-box.component.html',
  styleUrls: ['./weather-box.component.scss']
})
export class WeatherBoxComponent implements OnInit, OnDestroy {
  @Input() cityName: string | null = null;
  @Input() cityKey: string | undefined;

  currentLocationWeather?: CurrentWeatherResponse;

  constructor(private readonly weatherService: BringWeatherService) { }

  ngOnInit(): void {
    this.weatherService.getCurrentWeather(this.cityKey).subscribe(
      (weather: CurrentWeatherResponse[]) => {
        this.currentLocationWeather = weather[0];
      }
    )
  }
  
    ngOnDestroy(): void {
      this.currentLocationWeather = undefined;
    }

}
