import { FavoritesRoutingModule } from './favorites-routing.module';
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
    FavoritesRoutingModule,
    WeatherBoxModule
  ],
  exports: [
    FavoritesComponent,
  ]
})
export class FavoritesModule { }
