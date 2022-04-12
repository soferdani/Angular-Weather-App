import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentWeatherComponent } from './current-weather.component';
import { MatButtonModule } from '@angular/material/button';
import { OneDayWeatherBoxModule } from '../one-day-weather-box/one-day-weather-box.module';



@NgModule({
  declarations: [
    CurrentWeatherComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    OneDayWeatherBoxModule
  ],
  exports: [
    CurrentWeatherComponent
  ]
})
export class CurrentWeatherModule { }
