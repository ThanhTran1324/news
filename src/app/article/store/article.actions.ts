import { Action } from '@ngrx/store';
import { Article } from '../../model/article.model';
export const FETCH_ARTICLE_START = '[Article] Fetch Article Start';
export const FETCH_ARTICLE_SUCCESS = '[Article] Fetch Article Success';

export type ArticleActions = FetchArticleStart | FetchArticleSuccess;

export class FetchArticleStart implements Action {
  readonly type = FETCH_ARTICLE_START;
}

export class FetchArticleSuccess implements Action {
  readonly type = FETCH_ARTICLE_SUCCESS;
  constructor(public payload: Article[]) {}
}
