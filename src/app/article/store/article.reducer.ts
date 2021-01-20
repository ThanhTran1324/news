import * as ArticleActions from './article.actions';
import { Article } from '../../model/Article.model';

export interface State {
  articles: Article[];
}

const initialState: State = {
  articles: [],
};

export function ArticleReducer(
  state: State = initialState,
  action: ArticleActions.ArticleActions
) {
  switch (action.type) {
    case ArticleActions.FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        articles: action.payload,
      };
    default:
      return state;
  }
}
