import { Temperature } from './temperature.interface';

export interface CurrentWeatherResponse {
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




