import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';
import { WeatherBoxModule } from '../weather-box/weather-box.module';



@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    WeatherBoxModule
  ],
  exports: [
    FavoritesComponent
  ]
})
export class FavoritesModule { }
