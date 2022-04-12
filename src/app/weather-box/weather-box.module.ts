import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherBoxComponent } from './weather-box.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { WeatherUrlPipe } from '../shared/weather-url-pip/weather-url.pipe';
import { WeatherUrlPipModule } from '../shared/weather-url-pip/weather-url-pip.module';


@NgModule({
  declarations: [
    WeatherBoxComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    WeatherUrlPipModule
  ],
  exports: [
    WeatherBoxComponent
  ]
})
export class WeatherBoxModule { }
