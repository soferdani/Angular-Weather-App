
export interface currentWeatherResponse {
  LocalObservationDateTime: string;
  EpochTime: number;
  WeatherText: string;
  WeatherIcon: number;
  HasPrecipitation: boolean;
  PrecipitationType: string| null;
  IsDayTime: boolean;
  Temperature: Temperature;
  MobileLink: string;
  Link: string;
};

export interface Temperature {
  Metric: {
    Value: number;
    Unit: string;
    UnitType: number;
  },
  Imperial: {
    Value: number;
    Unit: string;
    UnitType: number;
  }
}
