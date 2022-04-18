import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  FAVORITES = [
    { city: 'London', key: "328328" },
    { city: 'Paris', key: "623" },
  ]
}
