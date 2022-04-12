import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneDayWeatherBoxComponent } from './one-day-weather-box.component';



@NgModule({
  declarations: [
    OneDayWeatherBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OneDayWeatherBoxComponent
  ]
})
export class OneDayWeatherBoxModule { }
