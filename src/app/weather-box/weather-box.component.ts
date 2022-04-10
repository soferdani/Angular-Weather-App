import {  Observable } from 'rxjs';
import { ServiceService } from './../service/service.service';
import { Component, Input, OnInit } from '@angular/core';
import { currentWeatherResponse } from '../service/current-weather-response.interface';

@Component({
  selector: 'app-weather-box',
  templateUrl: './weather-box.component.html',
  styleUrls: ['./weather-box.component.scss']
})
export class WeatherBoxComponent implements OnInit {
  @Input() cityName: string | null = null;
  @Input() cityKey: number | string = 0;

  currentLocationWeather$?: Observable<currentWeatherResponse> = this.bringWeatherService.getWeatherByKey(this.cityKey);


  constructor(
    private bringWeatherService: ServiceService
    ) { }

  ngOnInit(): void {

  }

}
