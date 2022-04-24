import { Component, Input, OnInit ,ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-one-day-weather-box',
  templateUrl: './one-day-weather-box.component.html',
  styleUrls: ['./one-day-weather-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OneDayWeatherBoxComponent implements OnInit {
  @Input() temperatureMin: number = 0 ;
  @Input() temperatureMax: number = 0 ;
  @Input() day: string = "" ;
  @Input() link: string = "";
  @Input() icon: number = 0;

  constructor() {

  }
  averageTemperatureInC: number | undefined;
  dayInText: string | undefined;

  ngOnInit(): void {
    this.averageTemperatureInC = this.bringAverageTemperatureInC(this.temperatureMin, this.temperatureMax);
    this.dayInText = this.bringDayInText(this.day);
  }

  bringAverageTemperatureInC(min:number, max:number): number {
    const average = Math.round((min + max) / 2);
    return Math.round((average - 32) * 5 / 9);
  }

  bringDayInText(day: string): any { // no need moment for this!
    const dataObj = new Date(day);
    const finalDay = dataObj.getDay();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[finalDay];
  }

}
