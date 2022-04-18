import { CurrentWeatherResponse } from './../shared/interfaces/current-weather-response.interface';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-box',
  templateUrl: './weather-box.component.html',
  styleUrls: ['./weather-box.component.scss']
})
export class WeatherBoxComponent implements OnInit {
  @Input() cityName: string | null = null;
  @Input() cityKey: number | string = 0;

  // currentLocationWeather$?: Observable<currentWeatherResponse> = this.bringWeatherService.getWeatherByKey(this.cityKey);

  weatherJson: CurrentWeatherResponse = {
    "LocalObservationDateTime": "2022-04-10T11:38:00+04:30",
    "EpochTime": 1649574480,
    "WeatherText": "Partly sunny",
    "WeatherIcon": 3,
    "HasPrecipitation": false,
    "PrecipitationType": null,
    "IsDayTime": true,
    "Temperature": {
      "Metric": {
        "Value": 16.1,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 61,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "MobileLink": "http://www.accuweather.com/en/ir/tehran/210841/current-weather/210841?lang=en-us",
    "Link": "http://www.accuweather.com/en/ir/tehran/210841/current-weather/210841?lang=en-us"
  }

  constructor() { }

  ngOnInit(): void {

  }

}
