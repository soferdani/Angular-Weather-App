import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

export const forecasts5day = {
  "Headline": {
    "EffectiveDate": "2022-04-12T08:00:00+04:30",
    "EffectiveEpochDate": 1649734200,
    "Severity": 7,
    "Text": "Warm Tuesday",
    "Category": "heat",
    "EndDate": "2022-04-12T20:00:00+04:30",
    "EndEpochDate": 1649777400,
    "MobileLink": "http://www.accuweather.com/en/ir/tehran/210841/daily-weather-forecast/210841?lang=en-us",
    "Link": "http://www.accuweather.com/en/ir/tehran/210841/daily-weather-forecast/210841?lang=en-us"
  },
  "DailyForecasts": [
    {
      "Date": "2022-04-11T07:00:00+04:30",
      "EpochDate": 1649644200,
      "Temperature": {
        "Minimum": {
          "Value": 63,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 79,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 1,
        "IconPhrase": "Sunny",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 33,
        "IconPhrase": "Clear",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/ir/tehran/210841/daily-weather-forecast/210841?day=1&lang=en-us",
      "Link": "http://www.accuweather.com/en/ir/tehran/210841/daily-weather-forecast/210841?day=1&lang=en-us"
    },
    {
      "Date": "2022-04-12T07:00:00+04:30",
      "EpochDate": 1649730600,
      "Temperature": {
        "Minimum": {
          "Value": 66,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 84,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 6,
        "IconPhrase": "Mostly cloudy",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 7,
        "IconPhrase": "Cloudy",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/ir/tehran/210841/daily-weather-forecast/210841?day=2&lang=en-us",
      "Link": "http://www.accuweather.com/en/ir/tehran/210841/daily-weather-forecast/210841?day=2&lang=en-us"
    },
    {
      "Date": "2022-04-13T07:00:00+04:30",
      "EpochDate": 1649817000,
      "Temperature": {
        "Minimum": {
          "Value": 63,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 83,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 3,
        "IconPhrase": "Partly sunny",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 33,
        "IconPhrase": "Clear",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/ir/tehran/210841/daily-weather-forecast/210841?day=3&lang=en-us",
      "Link": "http://www.accuweather.com/en/ir/tehran/210841/daily-weather-forecast/210841?day=3&lang=en-us"
    },
    {
      "Date": "2022-04-14T07:00:00+04:30",
      "EpochDate": 1649903400,
      "Temperature": {
        "Minimum": {
          "Value": 65,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 83,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 6,
        "IconPhrase": "Mostly cloudy",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 7,
        "IconPhrase": "Cloudy",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/ir/tehran/210841/daily-weather-forecast/210841?day=4&lang=en-us",
      "Link": "http://www.accuweather.com/en/ir/tehran/210841/daily-weather-forecast/210841?day=4&lang=en-us"
    },
    {
      "Date": "2022-04-15T07:00:00+04:30",
      "EpochDate": 1649989800,
      "Temperature": {
        "Minimum": {
          "Value": 60,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 79,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 4,
        "IconPhrase": "Intermittent clouds",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 35,
        "IconPhrase": "Partly cloudy",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/ir/tehran/210841/daily-weather-forecast/210841?day=5&lang=en-us",
      "Link": "http://www.accuweather.com/en/ir/tehran/210841/daily-weather-forecast/210841?day=5&lang=en-us"
    }
  ]
}

@Injectable({
  providedIn: 'root'
})

export class BringWeatherService {

  constructor(private httpClient: HttpClient) { }


    public getWeatherByCoordinates(lat: number, lon: number): Observable<any> { // not in use at the moment
      const url = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${environment.apiKey}&q=${lat},${lon}`;
      return this.httpClient.get(url);
    }


  public getAutocomplete(input: string): Observable<any> { // this is working
    const url = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${environment.apiKey}&q=${input}`;
    return this.httpClient.get(url);
  }

  public get5DayForecast(key: any) : Observable<any> { // need to test!!
    const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${environment.apiKey}`
    return this.httpClient.get(url);
  }
}
