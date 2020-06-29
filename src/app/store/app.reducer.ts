import { ActionReducerMap } from '@ngrx/store';
import * as fromArticle from '../article/store/article.reducer';
import * as fromWeather from '../weather/store/weather.reducer';
export interface AppState {
  article: fromArticle.State;
  weather: fromWeather.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  article: fromArticle.ArticleReducer,
  weather: fromWeather.WeatherReducer,
};
