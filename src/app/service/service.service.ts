import { Injectable } from '@angular/core';
import { citiesAndKeys } from '../current-weather/weather.interface';

export const FAVORITES: citiesAndKeys[] = [
  { city: 'London', Key: 210841 },
  { city: 'Paris', Key: 2988507 },
  { city: 'New York', Key: 5128581 },
  { city: 'Tokyo', Key: 1850147 },
]


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
}
