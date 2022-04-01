import { Component, OnInit } from '@angular/core';
import { ILink } from './nav-bar.interface';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  links: ILink[] = [
    { path: 'current-weather', label: 'Current Weather' },
    { path: 'favorites', label: 'Favorites' }
  ]

}
