import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login"},
  { path: "current-weather", loadChildren: () => import("./current-weather/current-weather-routing.module").then(m => m.CurrentWeatherRoutingModule) },
  { path: "favorites", loadChildren: () => import("./favorites/favorites-routing.module").then(m => m.FavoritesRoutingModule) },
  { path: "login", loadChildren: () => import("./login/login-routing.module").then(m => m.LoginRoutingModule) },
  { path: "**", component: CurrentWeatherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
