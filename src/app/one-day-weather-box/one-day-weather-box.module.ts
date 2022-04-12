import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneDayWeatherBoxComponent } from './one-day-weather-box.component';
import { WeatherUrlPipModule } from '../shared/weather-url-pip/weather-url-pip.module';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    OneDayWeatherBoxComponent,
  ],
  imports: [
    CommonModule,
    WeatherUrlPipModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    OneDayWeatherBoxComponent
  ]
})
export class OneDayWeatherBoxModule { }
