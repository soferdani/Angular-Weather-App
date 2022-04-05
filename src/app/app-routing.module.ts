import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
  { path: "current-weather", component: CurrentWeatherComponent },
  { path: "favorites", component: FavoritesComponent },
  { path: "**", component: CurrentWeatherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
