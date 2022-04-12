import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneDayWeatherBoxComponent } from './one-day-weather-box.component';
import { WeatherUrlPipe } from '../shared/weather-url-pip/weather-url.pipe';
import { WeatherUrlPipModule } from '../shared/weather-url-pip/weather-url-pip.module';



@NgModule({
  declarations: [
    OneDayWeatherBoxComponent,
  ],
  imports: [
    CommonModule,
    WeatherUrlPipModule
  ],
  exports: [
    OneDayWeatherBoxComponent
  ]
})
export class OneDayWeatherBoxModule { }
