import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handelClick() {
    // console.log("click");
  }

  handelInput(event: any) {
    // console.log(event.value);
  }

  forecast = [
    { day: 'Monday', temp: 22 },
    { day: 'Tuesday', temp: 23 },
    { day: 'Wednesday', temp: 24 },
    { day: 'Thursday', temp: 25 },
    { day: 'Friday', temp: 26 },
  ]

}
