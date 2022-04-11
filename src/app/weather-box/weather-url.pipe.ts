import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherUrl'
})
export class WeatherUrlPipe implements PipeTransform {

  transform(value: number ): string {
    if (value < 10) {
      return `https://developer.accuweather.com/sites/default/files/0${value}-s.png`;
    } else {
      return `https://developer.accuweather.com/sites/default/files/${value}-s.png`;
    }
  }

}
