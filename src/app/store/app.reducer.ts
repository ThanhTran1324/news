import { ActionReducerMap } from '@ngrx/store';
import * as fromArticle from '../article/store/article.reducer';

export interface AppState {
  article: fromArticle.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  article: fromArticle.ArticleReducer,
};
