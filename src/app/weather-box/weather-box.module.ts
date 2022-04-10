import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherBoxComponent } from './weather-box.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    WeatherBoxComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    WeatherBoxComponent
  ]
})
export class WeatherBoxModule { }
