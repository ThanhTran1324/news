import * as WeatherActions from './weather.actions';

export interface State {
  condition: string;
  tempF: number;
  isDay: boolean;
  icon: string;
  location: string;
  time: string;
  date: string;
}

const initialState: State = {
  condition: null,
  tempF: null,
  isDay: null,
  icon: null,
  location: null,
  time: null,
  date: null,
};

export function WeatherReducer(
  state: State = initialState,
  action: WeatherActions.WeatherActions
) {
  switch (action.type) {
    case WeatherActions.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
