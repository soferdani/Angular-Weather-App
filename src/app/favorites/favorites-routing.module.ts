import { FavoritesComponent } from './favorites.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: FavoritesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class FavoritesRoutingModule { }

