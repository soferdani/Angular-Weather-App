import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentWeatherComponent } from './current-weather.component';
import { MatButtonModule } from '@angular/material/button';
import { OneDayWeatherBoxModule } from '../one-day-weather-box/one-day-weather-box.module';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    CurrentWeatherComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    OneDayWeatherBoxModule,
    MatIconModule,
    MatCardModule,
    MatAutocompleteModule,
    MatInputModule
  ],
  exports: [
    CurrentWeatherComponent
  ]
})
export class CurrentWeatherModule { }
