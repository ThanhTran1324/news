import { Action } from '@ngrx/store';

export const FETCH_WEATHER_START = '[Weather] Fetch Weather Start';
export const FETCH_WEATHER_SUCCESS = '[Weather] Fetch Weather Success';

export type WeatherActions = FetchWeatherStart | FetchWeatherSuccess;

export class FetchWeatherStart implements Action {
  readonly type = FETCH_WEATHER_START;
}

export class FetchWeatherSuccess implements Action {
  readonly type = FETCH_WEATHER_SUCCESS;
  constructor(
    public payload: {
      condition: string;
      tempF: number;
      isDay: boolean;
      icon: string;
      location: string;
      time: string;
      date: string;
    }
  ) {}
}
