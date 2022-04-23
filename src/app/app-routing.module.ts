import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';




const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login"},
  { path: "current-weather", loadChildren: () => import("./current-weather/current-weather.module").then(m => m.CurrentWeatherModule), canActivate:[AuthGuard] },
  { path: "favorites", loadChildren: () => import("./favorites/favorites.module").then(m => m.FavoritesModule), canActivate:[AuthGuard] },
  { path: "login", loadChildren: () => import("./login/login.module").then(m => m.LoginModule) },
  { path: "**", redirectTo: "current-weather" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
