import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login"},
  { path: "current-weather", loadChildren: () => import("./current-weather/current-weather.module").then(m => m.CurrentWeatherModule), canActivate:[AuthGuard] },
  { path: "favorites", loadChildren: () => import("./favorites/favorites.module").then(m => m.FavoritesModule), canActivate:[AuthGuard] },
  { path: "login", loadChildren: () => import("./login/login.module").then(m => m.LoginModule) },
  { path: "**", redirectTo: "login" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
