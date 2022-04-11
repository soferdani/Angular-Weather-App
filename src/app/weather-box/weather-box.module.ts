import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherBoxComponent } from './weather-box.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { WeatherUrlPipe } from './weather-url.pipe';


@NgModule({
  declarations: [
    WeatherBoxComponent,
    WeatherUrlPipe
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
