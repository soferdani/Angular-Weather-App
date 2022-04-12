import { WeatherUrlPipe } from './weather-url.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [WeatherUrlPipe],
  imports: [
    CommonModule
  ],
  exports: [WeatherUrlPipe]
})
export class WeatherUrlPipModule { }
