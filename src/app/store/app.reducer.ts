import { ActionReducerMap } from '@ngrx/store';
import * as fromArticle from '../article/store/article.reducer';
import * as fromWeather from '../weather/store/weather.reducer';
import * as fromLocation from '../location/store/location.reducer';
export interface AppState {
  article: fromArticle.State;
  weather: fromWeather.State;
  location: fromLocation.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  article: fromArticle.ArticleReducer,
  weather: fromWeather.WeatherReducer,
  location: fromLocation.LocationReducer,
};
